import {spliceModelsReducer, activepliceModelReducer} from './splicemodels.reducer';
import {runRelogsReducer}from './runrelogs.reducer';

export const reducers = {
    spliceModels: spliceModelsReducer,
    activeSpliceModel: activepliceModelReducer,
    runRelogs: runRelogsReducer,
  };

export * from './actions';