import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as cmdActions from "./command.actions";
import * as eventActions from './event.actions'
import * as mockData from '../mockdata/splice.run.relog';
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class LoadEffects {
    constructor(private actions: Actions) { }
    @Effect() Load = this.actions.pipe(ofType(cmdActions.LOAD_ALL), switchMap(() => (
        [{ type: cmdActions.LOAD_SPLICES },
        { type: cmdActions.LOAD_RUNS },
        { type: cmdActions.LOAD_RELOGS },
        { type: cmdActions.LOAD_BOREHOLEDATA }])
    ));

    @Effect() LoadSplices = this.actions.pipe(ofType(cmdActions.LOAD_SPLICES), switchMap(() => (
        //http request here
        [new eventActions.SplicesLoaded(mockData.splices),
        new eventActions.ActiveSpliceSet({ splice: mockData.splices[0], loaded: true })])
    ));

    @Effect() LoadRuns = this.actions.pipe(ofType(cmdActions.LOAD_RUNS), map(() => (
        //http request here
        new eventActions.RunsLoaded(mockData.runs))
    ));

    @Effect() LoadRelogs = this.actions.pipe(ofType(cmdActions.LOAD_RELOGS), map(() => (
        //http request here
        new eventActions.RelogsLoaded(mockData.relogs))
    ));

    @Effect() LoadBoreholeData = this.actions.pipe(ofType(cmdActions.LOAD_BOREHOLEDATA), map(() => (
        //http request here
        new eventActions.ChannelDataLoaded([mockData.runData]))
    ));
}


@Injectable()
export class FocusedRunRelogsEffect {
    constructor(private actions: Actions) { }    
    
    
    //
    //focused runRelogsSet should be aggerate of run, relogs and activeSplice
    //new eventActions.FocusedRunRelogsSet(mockData.focusedRunRelogs)
    //
    //
    @Effect() ToSetFocus =  this.actions.pipe(ofType(eventActions.ACTIVE_SPLICE_SET), map(() => (        
        new eventActions.FocusedRunRelogsSet(mockData.focusedRunRelogs))
    ));

    @Effect() FocusedRunRelogsSet = this.actions.pipe(ofType(eventActions.FOCUSED_RUN_RELOGS_SET), switchMap(() => (
        //http request to get datahere
        [new eventActions.ChannelDataLoaded([mockData.runData, mockData.relog1Data]),
        new eventActions.DataColorLoaded(undefined)])
    ));
    
}


@Injectable()
export class FragmentEffects {
    constructor(private actions: Actions) { }

    @Effect() AddFragment = this.actions.pipe(
        ofType(cmdActions.ADD_FRAGMENT),
        switchMap((action: any) => (
            //at the same time update fragment of active splice.
            //calculate data and color here
            [new eventActions.ActiveSpliceFragmentAdd(action.payload),
            new eventActions.ChannelDataUpdated([mockData.runData]),
            new eventActions.DataColorUpdated(undefined)
            ]
        )
        ));
}