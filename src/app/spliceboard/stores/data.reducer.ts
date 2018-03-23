import { State, Action } from "@ngrx/store";
import { ViewChannelData, ViewDataColor } from "../models";
import { DataActions, LOAD_CHANNEL_DATA, LOAD_DATA_COLOR, UPDATE_CHANNEL_DATA, UPDATE_DATA_COLOR } from "./actions";


export function viewChannelDataReducer(state = undefined, action: DataActions): ViewChannelData[] {
    switch (action.type) {
        case LOAD_CHANNEL_DATA:
            return action.payload;
        case UPDATE_CHANNEL_DATA:
            return action.payload;
        default:
            return state;
    }
}

export function viewDataColorReducer(state = undefined, action: DataActions): ViewDataColor {
    switch (action.type) {
        case LOAD_DATA_COLOR:
            return action.payload;
        case UPDATE_DATA_COLOR:
            return action.payload;
        default:
            return state;
    }
}