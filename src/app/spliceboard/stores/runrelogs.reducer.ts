import { State, Action } from "@ngrx/store";
import { ViewRuns,ViewRelogs, FocusedRunRelogs } from "../models";
import { LOAD_RUNS, LOAD_RELOGS, LoadRuns, LoadRelogs, SetFocusedRunRelogs, SET_FOCUSED_RUN_RELOGS } from "./actions";

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

export function focusedRunRelogReducer(state=undefined, action:SetFocusedRunRelogs) : FocusedRunRelogs
{
    switch (action.type) {
        case SET_FOCUSED_RUN_RELOGS:
            return action.payload;
        default:
            return state;
    }
}