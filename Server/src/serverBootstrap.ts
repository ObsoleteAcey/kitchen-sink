import "reflect-metadata";

import cors from 'cors';
import dotenv from 'dotenv';
import expressWinston from 'express-winston';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import errorHandlerFactory from 'strong-error-handler';
import winston from "winston";
import { sequelize } from './domain/sequalize.dev';
// import controllers
import './controllers/pantryController';

import express from 'express';
import { DependencyInjectionConfigurator } from './config/di.config';



// initialize configuration
dotenv.config();


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
const server = new InversifyExpressServer(DependencyInjectionConfigurator.container);

server.setConfig((app: express.Application) => {
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
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json());
});

const appServer = server.build();

((): void => {
  sequelize.sync({force: true})
  .then(() =>{
    // start the Express server
    appServer.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${port}`);
    });
  }).catch(() =>
  {
    // do othing
  });
})();
