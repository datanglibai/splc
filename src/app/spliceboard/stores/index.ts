import {  activepliceReducer } from './active.splice.reducer';
import { splicesReducer, runsReducer, relogsReducer, focusedRunRelogReducer } from './splices.runs.relogs.reducer';
import { viewChannelDataReducer, viewDataColorReducer } from './data.reducer';

export const reducers = {
  splices: splicesReducer,
  activeSplice: activepliceReducer,
  runs: runsReducer,
  relogs: relogsReducer,
  viewChannelData: viewChannelDataReducer,
  viewDataColor: viewDataColorReducer,
  focusedRunRelogs: focusedRunRelogReducer
};

export * from './command.actions';
export * from './event.actions';