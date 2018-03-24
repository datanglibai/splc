
import { ViewSplice, Splice } from "../models";
import { State, Action } from "@ngrx/store";
import { SPLICES_LOADED, ACTIVE_SPLICE_SET, ActiveSpliceSet } from "./event.actions";

export function activepliceReducer(state = undefined, action: ActiveSpliceSet): ViewSplice {
    switch (action.type) {
        case ACTIVE_SPLICE_SET:
            return action.payload;

        default:
            return state;
    }
}