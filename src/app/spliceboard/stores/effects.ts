import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as cmdActions from "./command.actions";
import * as eventActions from './event.actions'
import * as mockData from '../mockdata/splice.run.relog';
import { Injectable } from "@angular/core";
import { switchMap, map, zip, flatMap } from 'rxjs/operators';
//import 'rxjs/add/operator/zip';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/zip"
import "rxjs/add/operator/map"
import { ACTIVE_SPLICE_FRAGMENTS_ADD } from "./event.actions";


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
        new eventActions.ActiveSpliceSet({ splice: mockData.splices[0], updateFragement: false, loaded: true })])
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

    //the reason is not make load runs/relogs after active splice because sometimes there is no splice.
    @Effect() SwitchActiveSplice = this.actions.pipe(
        ofType(cmdActions.SWITCH_ACTIVE_SPLICE),
        switchMap((action:any)=>[
            new eventActions.ActiveSpliceSet(action.payload),
            { type: cmdActions.LOAD_RUNS },
            { type: cmdActions.LOAD_RELOGS },
            { type: cmdActions.LOAD_BOREHOLEDATA }
        ]
    ));
}


@Injectable()
export class FocusedRunRelogsEffect {
    constructor(private actions: Actions) { }

    @Effect() aggregate = this.actions.pipe(
        zip(
            this.actions.ofType(eventActions.ACTIVE_SPLICE_SET),
            this.actions.ofType(eventActions.RELOGS_LOADED),
            this.actions.ofType(eventActions.RUNS_LOADED)),
        map(([a, b, c, d]) => {
            console.log('++++++++++++', a, b, c, d);
            return new eventActions.FocusedRunRelogsSet(mockData.focusedRunRelogs)
        }));

    //this may not be needed, since the dataload should be to associate with fragments state.
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
        map((action: any) => (
            //at the same time update fragment of active splice.
            //calculate data and color here
            new eventActions.ActiveSpliceFragmentAdd(action.payload)

        )));

    // @Effect() SpliceFragmentAdded = this.actions.pipe(
    //     ofType(ACTIVE_SPLICE_FRAGMENTS_ADD),
    //     switchMap((action: any) => (
    //         //at the same time update fragment of active splice.
    //         //calculate data and color here
    //         [new eventActions.ChannelDataUpdated([mockData.runData]),
    //         new eventActions.DataColorUpdated(undefined)
    //         ]
    //     )
    //     ))
}