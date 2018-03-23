import { splicesReducer, activepliceReducer } from './splice.reducer';
import { viewRunsReducer, viewRelogsReducer } from './runrelogs.reducer';

export const reducers = {
  splices: splicesReducer,
  activeSplice: activepliceReducer,
  viewRuns: viewRunsReducer,
  viewRelogs: viewRelogsReducer,
};

export * from './actions';