

import { Splice, Run, Relog } from "./splice.entity.model";

export interface ViewSplice {
    splice: Splice;
    loaded: boolean;
}

export interface ViewRuns {
    runs: Run[];
    loaded: boolean;
}

export interface ViewRelogs {
    relogs: Relog[];
    loaded: boolean;
}

export interface spliceModel {
    splice: ViewSplice;
    runs: ViewRuns;
    Relogs: ViewRelogs;
}

