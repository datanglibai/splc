import { splicesReducer, activepliceReducer } from './splice.reducer';
import { viewRunsReducer, viewRelogsReducer, focusedRunRelogReducer } from './runrelogs.reducer';
import { viewChannelDataReducer, viewDataColorReducer } from './data.reducer';

export const reducers = {
  splices: splicesReducer,
  activeSplice: activepliceReducer,
  viewRuns: viewRunsReducer,
  viewRelogs: viewRelogsReducer,
  viewChannelData: viewChannelDataReducer,
  viewDataColor: viewDataColorReducer,
  focusedRunRelogs: focusedRunRelogReducer
};

export * from './actions';