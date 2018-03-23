import { Action } from '@ngrx/store';
import { ViewSplice, ViewRuns, ViewRelogs, Splice, ViewChannelData, ViewDataColor, FocusedRunRelogs } from '../models';

//Initialization related
export const LOAD_SPLICES = '[Splice] Load Splices';
export const LOAD_ACTIVE_SPLICE = '[Splice] Load Active Splice';
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


//data related
export const LOAD_CHANNEL_DATA = '[Splice] Load Channel Data';
export const UPDATE_CHANNEL_DATA = '[Splice] Update Channel Data';
export const LOAD_DATA_COLOR = '[Splice] Load Channel Data Color';
export const UPDATE_DATA_COLOR = '[Splice] Update Channel Data Color';

export class LoadData implements Action {
  readonly type = LOAD_CHANNEL_DATA;
  constructor(public payload: ViewChannelData[]) {}
}

export class UpdateData implements Action {
  readonly type = UPDATE_CHANNEL_DATA;
  constructor(public payload: ViewChannelData[]) {}
}

export class LoadDataColor implements Action {
  readonly type = LOAD_DATA_COLOR;
  constructor(public payload: ViewDataColor) {}
}

export class UpdateDataColor implements Action {
  readonly type = UPDATE_DATA_COLOR;
  constructor(public payload: ViewDataColor) {}
}
export type DataActions = LoadData | UpdateData | LoadDataColor | UpdateDataColor;

//focused run/relogs
export const SET_FOCUSED_RUN_RELOGS = '[Splice] Set focused run/relogs';

export class SetFocusedRunRelogs implements Action {
  readonly type = SET_FOCUSED_RUN_RELOGS;
  constructor(public payload: FocusedRunRelogs) {}
}