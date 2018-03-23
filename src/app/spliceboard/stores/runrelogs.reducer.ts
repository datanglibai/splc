import { State, Action } from "@ngrx/store";
import { ViewRuns,ViewRelogs } from "../models";
import { LOAD_RUNS, LoadRuns, LoadRelogs } from "./actions";
import { LOAD_RELOGS } from "./index";

//export const initialState: SpliceModel[] = [];
  
export function viewRunsReducer(state=undefined, action:LoadRuns) : ViewRuns
{
    switch (action.type) {
        case LOAD_RUNS:
            return action.payload;
        default:
            return state;
    }
}

export function viewRelogsReducer(state=undefined, action:LoadRelogs) : ViewRelogs
{
    switch (action.type) {
        case LOAD_RELOGS:
            return action.payload;
        default:
            return state;
    }
}