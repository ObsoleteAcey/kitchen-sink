import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { PantryApplicationService } from '../applicationServices/pantry.application.service';

@controller("/pantry")
export class PantryController implements interfaces.Controller {

    constructor(private _pantryService: PantryApplicationService) {

    }

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return "Welcome!";
    }
}