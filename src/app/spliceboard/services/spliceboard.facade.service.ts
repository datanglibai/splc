import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Splice, Run } from "../models/index";
import { Observable } from 'rxjs/Observable';

import { Store, State } from '@ngrx/store';
import { LoadSplices, LoadActiveSplice, LoadRuns, LoadRelogs, LoadData, SetFocusedRunRelogs } from '../stores';
import { ViewRelogs, ViewRuns, ViewSpliceModel, IndexRange, ViewSplice, ViewChannelData, FocusedRunRelogs } from "../models/splice.view.model";
import { Fragment } from '../models/splice.entity.model';

//data
import { splices, runs, relogs, runData, relog1Data, relog2Data, focusedRunRelogs } from '../mockdata/splice.run.relog';

@Injectable()
export class SpliceboardFacadeService {


  public splice$: Store<any>;
  public activeSplice$: Observable<ViewSplice>;
  public splices$: Observable<Splice[]>;
  public viewRuns$: Observable<ViewRuns>;
  public viewRelogs$: Observable<ViewRelogs>;
  public fragments$: Observable<Fragment[]>;
  public viewChannelData$ :Observable<ViewChannelData[]>;
  public viewChannelColor$ : Observable<ViewChannelData[]>;
  public focusedRunRelogs$ : Observable<FocusedRunRelogs>;

  //selectors
  public viewSpliceModel$: Observable<ViewSpliceModel>;
  public totalRange$: Observable<IndexRange>;

  constructor(private store: Store<any>) {
    this.splice$ = this.store.select('splice');
    this.splices$ = this.splice$.select("splices");
    this.viewRuns$ = this.splice$.select("viewRuns");
    this.viewRelogs$ = this.splice$.select("viewRelogs");
    this.viewChannelData$ = this.splice$.select("viewChannelData");
    this.viewChannelColor$ = this.splice$.select("viewChannelColor");
    this.focusedRunRelogs$ = this.splice$.select("focusedRunRelogs");

    this.activeSplice$ = this.splice$.select(s => this.selectActiveSplice(s));
    this.fragments$ = this.splice$.select(s => s.activeSplice.fragments);
    this.viewSpliceModel$ = this.splice$.select(s => this.selectViewSpliceModel(s));
    this.totalRange$ = this.splice$.select(s => this.selectTotalRange(s));

    //dispatch default focused run/relogs if there is relog, it should be an effect later
    this.store.dispatch(new SetFocusedRunRelogs(focusedRunRelogs));
    this.store.dispatch(new LoadData([runData, relog1Data]));
    
  }

  public load() {
    this.loadSplices();
    this.loadRuns();
    this.loadRelogs();
    this.loadBoreholeData();
  }
  private selectActiveSplice(s: any): ViewSplice {
    // when updating the fragments, set loaded false and not emit active change.
    if (s.activeSplice && s.activeSplice.loaded)
      return s.activeSplice;
  }
  private selectViewSpliceModel(s: any): ViewSpliceModel {
    if (s.activeSplice && s.activeSplice.loaded &&
      s.viewRuns && s.viewRelogs && s.viewRelogs.loaded) {
      //calculate range here
          
      return { activeSplice: s.activeSplice, viewRuns: s.viewRuns, viewRelogs: s.viewRelogs, totalRange: { start: 2000, stop: 6000 } }
    }
  }

  private selectTotalRange(s: any): IndexRange {
    if (s.viewRuns && s.viewRelogs &&
      s.viewRuns.loaded && s.viewRelogs.loaded) {
      return { start: 2000, stop: 6000 };
    }
  }


  private loadSplices() {
    this.store.dispatch(new LoadSplices(splices));
    this.store.dispatch(new LoadActiveSplice({ splice: splices[0], updateFragement: false, loaded: true }));
  }

  private loadRuns(): any {
    this.store.dispatch(new LoadRuns({ runs: runs, loaded: true }))
  }

  private loadRelogs(): any {
    this.store.dispatch(new LoadRelogs({ relogs: relogs, loaded: true }));
  }

  private loadBoreholeData(): any {
    this.store.dispatch(new LoadData([runData]));
  }

}
