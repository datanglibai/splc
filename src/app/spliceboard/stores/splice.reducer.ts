
import { ViewSplice, Splice } from "../models";
import { State, Action } from "@ngrx/store";
import { LOAD_SPLICES, LOAD_ACTIVE_SPLICE, SpliceLoadActions } from "./actions";

//export const initialState: SpliceModel[] = [];

export function splicesReducer(state = undefined, action: SpliceLoadActions): Splice[] {
    
    switch (action.type) {
        case LOAD_SPLICES:
            let newstate = [...action.payload];
            return newstate;
        default:
            return state;
    }

}

export function activepliceReducer(state = undefined, action: SpliceLoadActions): ViewSplice {
    switch (action.type) {
        case LOAD_ACTIVE_SPLICE:
        //console.log('in active splice reducer', action);
            return action.payload;
        default:
            return state;
    }
}