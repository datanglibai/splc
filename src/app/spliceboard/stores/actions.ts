import { Action } from '@ngrx/store';
import { ViewSplice, ViewRuns, ViewRelogs, Splice } from '../models';


export const LOAD_SPLICES = '[Splice] Load Splices';
export const LOAD_ACTIVE_SPLICE = '[Splice] Load Active Splices';
export const LOAD_RUNS = '[Splice] Load Runs';
export const LOAD_RELOGS = '[Splice] Load Relogs';
 


export class LoadSplices implements Action {
  readonly type = LOAD_SPLICES;
  constructor(public payload: Splice[]) {}
}

export class LoadActiveSplice implements Action {
  readonly type = LOAD_ACTIVE_SPLICE;

  constructor(public payload: ViewSplice) {}
}

export class LoadRuns implements Action {
  readonly type = LOAD_RUNS;
  constructor(public payload: ViewRuns) {}
}

export class LoadRelogs implements Action {
  readonly type = LOAD_RELOGS;
  constructor(public payload: ViewRelogs) {}
}

export type SpliceLoadActions = LoadSplices | LoadActiveSplice | LoadRuns | LoadRelogs;