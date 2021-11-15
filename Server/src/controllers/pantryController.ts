import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { inject } from "inversify";
import { PantryApplicationService } from '../applicationServices/pantry.application.service';
// import config data
import { TYPES } from "../config/types.config";
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';


@controller("/pantry")
export class PantryController implements interfaces.Controller {

    constructor(
        @inject(TYPES.PantryApplicationService)
        private _pantryService: PantryApplicationService) {
        // do nothing
    }

    @httpGet("/")
    private index(@request() req: express.Request, @response() res: express.Response): string {
        return "Welcome!";
    }

    @httpGet("/byid/:id")
    private async pantryById(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
        const idAsNumber: number = parseInt(id, 10);

        if(Number.isNaN(idAsNumber))
        {
            res.status(400).send("Invalid pantry ID");
        }

        const pantry = await this._pantryService.getPantryByIdAsync(idAsNumber);

        if(pantry === null)
        {
            res.status(404).send("Pantry no found");
        }

        res.status(200).send(pantry);
    }
}