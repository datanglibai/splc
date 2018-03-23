import { Action } from "@ngrx/store";
import { Effect } from "@ngrx/effects";
import { LOAD_SPLICES, LOAD_ALL, LOAD_RUNS, START_LOAD_SPLICES } from ".";

class LoadEffects{
    constructor(private actions:Action[]){}
    @Effect() Load = this.actions.filter(v=> v.type == LOAD_ALL).map(() => ({type:START_LOAD_SPLICES}))

}