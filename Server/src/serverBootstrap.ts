import "reflect-metadata";

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import expressWinston from 'express-winston';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import errorHandlerFactory from 'strong-error-handler';
import winston from "winston";
import { sequelize } from './domain/sequalize.dev';
// import config data
import { TYPES } from "./config/types";
// import controllers
import './controllers/pantryController';
// import domain services
import { PantryDomainService } from './domain/services/pantry.domain.service';
// import application services
import { PantryApplicationService } from './applicationServices/pantry.application.service'
// import common services
import { LoggingService } from './commonServices/logging.service';



// initialize configuration
dotenv.config();

// set up container
const container = new Container();

// register the DI
container.bind<LoggingService>(TYPES.LoggingService).to(LoggingService);

container.bind<PantryApplicationService>(TYPES.LoggingService).to(PantryApplicationService);

container.bind<PantryDomainService>(TYPES.LoggingService).to(PantryDomainService);

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: true,
  preflightContinue: false
};

// create server
const server = new InversifyExpressServer(container);

server.setConfig((app: any) => {
  app.use(errorHandlerFactory({
    debug: process.env.NODE_ENV === 'development',
    log: true,
  }));

  // express-winston logger makes sense BEFORE the router
  app.use(expressWinston.logger({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    level: "debug",
    transports: [
      new winston.transports.Console()
    ],
  }));
  app.use(cors(corsOptions));
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const appServer = server.build();

(async() => {
  await sequelize.sync({force: true});

  // start the Express server
  appServer.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
  });
})();
