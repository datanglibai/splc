
import { SpliceModel } from "../models";
import { State, Action } from "@ngrx/store";
import { LOAD_SPLICES, LOAD_ACTIVE_SPLICE, SpliceActions } from "./actions";

//export const initialState: SpliceModel[] = [];

export function spliceModelsReducer(state = [], action: SpliceActions): SpliceModel[] {
    
    switch (action.type) {
        case LOAD_SPLICES:
            let newstate = [...action.payload];
            return newstate;
        default:
            return state;
    }

}

export function activepliceModelReducer(state = undefined, action: SpliceActions): SpliceModel {
    switch (action.type) {
        case LOAD_ACTIVE_SPLICE:
            return action.payload;
        default:
            return state;
    }
}