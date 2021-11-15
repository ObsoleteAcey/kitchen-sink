import { Container } from 'inversify';
// import config data
import { TYPES } from './types.config';
// import domain services
import { PantryDomainService } from '../domain/services/pantry.domain.service';
// import application services
import { PantryApplicationService } from '../applicationServices/pantry.application.service'
// import common services
import { LoggingService } from '../commonServices/logging.service';

export class DependencyInjectionConfigurator {
    private static _container: Container;

    public static configure(): Container {
      // protect against multiple calls
      if (this._container) {
        return this._container;
      }

      this._container = new Container();

      // register the DI
      this._container.bind<LoggingService>(TYPES.LoggingService).to(LoggingService);
      this._container.bind<PantryApplicationService>(TYPES.PantryApplicationService).to(PantryApplicationService);
      this._container.bind<PantryDomainService>(TYPES.PantryDomainService).to(PantryDomainService);

      return this._container;
    }

    public static get container(): Container {
      if (!this._container) {
        this.configure();
      }

      return this._container;
    }
  }
