

import { Splice, Run, Relog } from "./splice.entity.model";

export interface ViewSplice {
    splice: Splice;
    updateFragement: boolean;
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

export interface ViewSpliceModel {
    activeSplice: ViewSplice;
    viewRuns: ViewRuns;
    viewRelogs: ViewRelogs;
    totalRange: IndexRange;
}

export interface ViewChannelData {
    mnemonic: string;
    indexes: number[];
    values: number[];
}

//maybe different from data
export interface ViewDataColor {
    mnemonic: string;
    indexes: number[];
    values: number[];
}

//

export interface FocusedRunRelogs
{
    runRelogs:Run[],
    totalRange: IndexRange
}

export interface ViewFragment {
    
}

export interface IndexRange {
    start: number;
    stop: number;
}


