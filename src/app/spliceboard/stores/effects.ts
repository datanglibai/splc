import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ADD_FRAGMENT, LOAD_SPLICES, LOAD_ALL, LOAD_RUNS, LOAD_RELOGS, LOAD_BOREHOLEDATA } from "./command.actions";
import { ChannelDataUpdated, ActiveSpliceFragmentAdd, SpliceLoadedActions, SplicesLoaded, ActiveSpliceSet, RunsLoaded, RelogsLoaded, FocusedRunRelogsSet, ChannelDataLoaded } from './event.actions'
import { splices, runs, relogs, runData, relog1Data, relog2Data, focusedRunRelogs } from '../mockdata/splice.run.relog';
import { Injectable } from "@angular/core";
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class LoadEffects {
    constructor(private actions: Actions) { }
    @Effect() Load = this.actions.pipe(ofType(LOAD_ALL), switchMap(() => (
        [{ type: LOAD_SPLICES },
        { type: LOAD_RUNS },
        { type: LOAD_RELOGS },
        { type: LOAD_BOREHOLEDATA }])));

    @Effect() LoadSplices = this.actions.pipe(ofType(LOAD_SPLICES), switchMap(() => (
        //http request here
        [new SplicesLoaded(splices), new ActiveSpliceSet({ splice: splices[0], loaded: true })])));

    @Effect() LoadRuns = this.actions.pipe(ofType(LOAD_RUNS), map(() => (
        //http request here
        new RunsLoaded(runs))));

    @Effect() LoadRelogs = this.actions.pipe(ofType(LOAD_RELOGS), switchMap(() => (
        //http request here
        [new RelogsLoaded(relogs), new FocusedRunRelogsSet(focusedRunRelogs)])));

    @Effect() LoadBoreholeData = this.actions.pipe(ofType(LOAD_BOREHOLEDATA), map(() => (
        //http request here
        new ChannelDataLoaded([runData]))));
}

@Injectable()
export class FragmentEffects {
    constructor(private actions: Actions) { }

    @Effect() AddFragment = this.actions.pipe(
        ofType(ADD_FRAGMENT),         
        switchMap((action:any) => (
        //at the same time update fragment of active splice.
        //calculate data and color here
        [new ActiveSpliceFragmentAdd(action.payload), 
            new ChannelDataUpdated([runData]) 
            /*, new DataColorUpdated()*/])));

}