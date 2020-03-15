import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";

@controller("/pantry")
export class PantryController implements interfaces.Controller {

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return "Welcome!";
    }
}