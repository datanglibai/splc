import { State, Action } from "@ngrx/store";
import { ViewChannelData, ViewDataColor } from "../models";
import { DataActions, CHANNEL_DATA_LOADED, DATA_COLOR_LOADED, CHANNEL_DATA_UPDATED, DATA_COLOR_UPDATED } from "./event.actions";


export function viewChannelDataReducer(state = undefined, action: DataActions): ViewChannelData[] {
    switch (action.type) {
        case CHANNEL_DATA_LOADED:
            return action.payload;
        case CHANNEL_DATA_UPDATED:
            return action.payload;
        default:
            return state;
    }
}

export function viewDataColorReducer(state = undefined, action: DataActions): ViewDataColor {
    switch (action.type) {
        case DATA_COLOR_LOADED:
            return action.payload;
        case DATA_COLOR_UPDATED:
            return action.payload;
        default:
            return state;
    }
}