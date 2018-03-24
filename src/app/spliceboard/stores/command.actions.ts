import { Fragment } from "../models";
import { Action } from "@ngrx/store";

export const LOAD_ALL = '[Splice] Load All';
export const LOAD_SPLICES = '[Splice] Load Splices';
export const LOAD_RUNS = '[Splice] Load Runs';
export const LOAD_RELOGS = '[Splice] Load Relogs';
export const LOAD_BOREHOLEDATA = '[Splice] Load Borehoe Data';


export const ADD_FRAGMENT = '[Splice] Add Fragement';
export const UPDATE_FRAGMENT = '[Splice] Update Fragement';
export const DELETE_FRAGMENT = '[Splice] DELETE Fragement';


export class AddFragment implements Action {
    readonly type = ADD_FRAGMENT;
    constructor(public payload: Fragment) { }
}

export class UpdateFragment implements Action {
    readonly type = ADD_FRAGMENT;
    constructor(public payload: Fragment) { }
}

export class DeleteFragment implements Action {
    readonly type = ADD_FRAGMENT;
    constructor(public payload: Fragment) { }
}