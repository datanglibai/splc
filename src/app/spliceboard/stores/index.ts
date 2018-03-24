import {  activepliceReducer } from './active.splice.reducer';
import { splicesReducer, runsReducer, relogsReducer, focusedRunRelogReducer } from './splices.runs.relogs.reducer';
import { viewChannelDataReducer, viewDataColorReducer } from './data.reducer';
import { FocusedRunRelogsEffect, LoadEffects, FragmentEffects } from './effects';

export const reducers = {
  splices: splicesReducer,
  activeSplice: activepliceReducer,
  runs: runsReducer,
  relogs: relogsReducer,
  viewChannelData: viewChannelDataReducer,
  viewDataColor: viewDataColorReducer,
  focusedRunRelogs: focusedRunRelogReducer
};

export const effects =[
  LoadEffects,
  FocusedRunRelogsEffect,
  FragmentEffects  
]
export * from './command.actions';
export * from './event.actions';