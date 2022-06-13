import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next, requestBody, TYPE } from "inversify-express-utils";
import { inject } from "inversify";
import { PantryApplicationService } from '../applicationServices/pantry.application.service';
// import config data
import { TYPES } from "../config/types.config";
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';
import { PantryViewModel } from '../dataobjects/viewmodels/pantry/pantry.vm';
import { MappingService } from '../commonServices/mapping.service';


@controller("/pantry")
export class PantryController implements interfaces.Controller {

    constructor(
        @inject(TYPES.MappingService)
        private _mappingService: MappingService,
        @inject(TYPES.PantryApplicationService)
        private _pantryService: PantryApplicationService) {
        // do nothing
    }

    @httpGet("/all")
    private async getAllPanties(@request() req: express.Request, @response() res: express.Response): Promise<void> {
        const pantries = await this._pantryService.getAllPantriesAsync();

        if(pantries === null || pantries.length === 0)
        {
            res.status(404).send("No pantries found");
            return;
        }

        res.status(200).send(pantries);
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
            res.status(404).send("Pantry not found");
            return;
        }

        res.status(200).send(pantry);
    }

    @httpPost("/new")
    private async createPantry(@requestBody() pantryVm: PantryViewModel, @response() res: express.Response): Promise<void>
    {
        // do validation here

        await this._pantryService.createPantry(this._mappingService.map(pantryVm, PantryDto, PantryViewModel));

        res.status(200).send();
    }
}