import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import { PantryApplicationService } from '../applicationServices/pantry.application.service';
// import config data
import { TYPES } from "../config/types";


@controller("/pantry")
export class PantryController implements interfaces.Controller {

    constructor(
        @inject(TYPES.PantryApplicationService)
        private _pantryService: PantryApplicationService) {
        // do nothing
    }

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return "Welcome!";
    }
}