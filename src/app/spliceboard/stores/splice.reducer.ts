
import { ViewSplice, Splice } from "../models";
import { State, Action } from "@ngrx/store";
import { LOAD_SPLICES, LOAD_ACTIVE_SPLICE, SpliceLoadActions, LoadSplices, LoadActiveSplice } from "./actions";

//export const initialState: SpliceModel[] = [];

export function splicesReducer(state = undefined, action: LoadSplices): Splice[] {

    switch (action.type) {
        case LOAD_SPLICES:
            //console.log("in splices reducer:", action);
            let newstate = [...action.payload];
            return newstate;
        default:
            return state;
    }

}

export function activepliceReducer(state = undefined, action: LoadActiveSplice): ViewSplice {
    switch (action.type) {
        case LOAD_ACTIVE_SPLICE:
            return action.payload;
        default:
            return state;
    }
}