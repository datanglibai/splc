import { State, Action } from "@ngrx/store";
import { FocusedRunRelogs, Splice, Run, Relog } from "../models";
import { SplicesLoaded, SPLICES_LOADED, RUNS_LOADED, RELOGS_LOADED, RunsLoaded, RelogsLoaded, FocusedRunRelogsSet, FOCUSED_RUN_RELOGS_SET } from "./event.actions";

//export const initialState: SpliceModel[] = [];
  
export function runsReducer(state=undefined, action:RunsLoaded) : Run[]
{
    switch (action.type) {
        case RUNS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

export function relogsReducer(state=undefined, action:RelogsLoaded) : Relog[]
{
    switch (action.type) {
        case RELOGS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

export function focusedRunRelogReducer(state=undefined, action:FocusedRunRelogsSet) : FocusedRunRelogs
{
    switch (action.type) {
        case FOCUSED_RUN_RELOGS_SET:
            return action.payload;
        default:
            return state;
    }
}

export function splicesReducer(state = undefined, action: SplicesLoaded): Splice[] {

    switch (action.type) {
        case SPLICES_LOADED:
            //console.log("in splices reducer:", action);
            let newstate = [...action.payload];
            return newstate;
        default:
            return state;
    }

}