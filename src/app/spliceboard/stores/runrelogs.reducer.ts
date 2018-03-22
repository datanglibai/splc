import { State, Action } from "@ngrx/store";
import { RunRelog } from "../models";
import { LOAD_RUN_RELOGS, SpliceActions } from "./actions";

//export const initialState: SpliceModel[] = [];
  
export function runRelogsReducer(state=undefined, action:SpliceActions) : RunRelog[]
{
    switch (action.type) {
        case LOAD_RUN_RELOGS:
            return action.payload;
        default:
            return state;
    }
}