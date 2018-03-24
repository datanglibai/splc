import { Action } from '@ngrx/store';
import { ViewSplice, Run, Relog, Splice, ViewChannelData, ViewDataColor, FocusedRunRelogs, Fragment } from '../models';

//

export const SPLICES_LOADED = '[Splice] Splices Loaded';
export const RUNS_LOADED = '[Splice] Runs Loaded';
export const RELOGS_LOADED = '[Splice] Relogs Loaded';

export class SplicesLoaded implements Action {
  readonly type = SPLICES_LOADED;
  constructor(public payload: Splice[]) {}
}

export class RunsLoaded implements Action {
  readonly type = RUNS_LOADED;
  constructor(public payload: Run[]) {}
}

export class RelogsLoaded implements Action {
  readonly type = RELOGS_LOADED;
  constructor(public payload: Relog[]) {}
}
export type SpliceLoadedActions = SplicesLoaded | RunsLoaded | RelogsLoaded;

//active splice related
export const ACTIVE_SPLICE_SET = '[Splice] Active Splice Set';
export const ACTIVE_SPLICE_FRAGMENTS_ADD = '[Splice] Active Splice Add';
export const ACTIVE_SPLICE_FRAGMENTS_UPDATE = '[Splice] Active Splice Update';
export const ACTIVE_SPLICE_FRAGMENTS_DELETE = '[Splice] Active Splice Delete';
export class ActiveSpliceSet implements Action {
  readonly type = ACTIVE_SPLICE_SET;
  constructor(public payload: ViewSplice) {}
}

export class ActiveSpliceFragmentAdd implements Action {
  readonly type = ACTIVE_SPLICE_FRAGMENTS_ADD;
  constructor(public payload: Fragment) {}
}


//data related
export const CHANNEL_DATA_LOADED = '[Splice] Channel Data Loaded';
export const CHANNEL_DATA_UPDATED = '[Splice] Channel Data Updated';
export const DATA_COLOR_LOADED = '[Splice] Channel Data Color Loaded';
export const DATA_COLOR_UPDATED = '[Splice] Channel Data Color Updated';

export class ChannelDataLoaded implements Action {
  readonly type = CHANNEL_DATA_LOADED;
  constructor(public payload: ViewChannelData[]) {}
}

export class ChannelDataUpdated implements Action {
  readonly type = CHANNEL_DATA_UPDATED;
  constructor(public payload: ViewChannelData[]) {}
}

export class DataColorLoaded implements Action {
  readonly type = DATA_COLOR_LOADED;
  constructor(public payload: ViewDataColor) {}
}

export class DataColorUpdated implements Action {
  readonly type = DATA_COLOR_UPDATED;
  constructor(public payload: ViewDataColor) {}
}
export type DataActions = ChannelDataLoaded | ChannelDataUpdated | DataColorLoaded | DataColorUpdated;

//focused run/relogs
export const FOCUSED_RUN_RELOGS_SET = '[Splice] Set focused run/relogs';

export class FocusedRunRelogsSet implements Action {
  readonly type = FOCUSED_RUN_RELOGS_SET;
  constructor(public payload: FocusedRunRelogs) {}
}