import { Action } from '@ngrx/store';
import { SpliceModel, RunRelog } from '../models';


export const LOAD_SPLICES = '[Splice] Load Splices';
export const LOAD_ACTIVE_SPLICE = '[Splice] Load Active Splices';
export const LOAD_RUN_RELOGS = '[Splice] Load Run Relogs';
 


export class LoadSplices implements Action {
  readonly type = LOAD_SPLICES;
  constructor(public payload: SpliceModel[]) {}
}

export class LoadActiveSplice implements Action {
  readonly type = LOAD_ACTIVE_SPLICE;

  constructor(public payload: SpliceModel) {}
}

export class LoadRunRelogs implements Action {
  readonly type = LOAD_RUN_RELOGS;

  constructor(public payload: RunRelog[]) {}
}

export type SpliceActions = LoadSplices | LoadActiveSplice | LoadRunRelogs;