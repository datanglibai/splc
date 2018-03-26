

import { Splice, Run, Relog, Fragment } from "./splice.entity.model";

export interface ViewSplice {
    splice: Splice;
    //updateFragement: boolean;
    loaded: boolean;
}

export interface ViewSpliceModel {
    activeSplice: ViewSplice;
    runs: Run[];
    relogs: Relog[];
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
    viewFragements: Fragment[],
    totalRange: IndexRange
}

export interface ViewFragment {
    
}

export interface IndexRange {
    start: number;
    stop: number;
}


