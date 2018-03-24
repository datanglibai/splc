import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Splice, Run, Fragment, Relog } from "../models/index";
import { Observable } from 'rxjs/Observable';

import { Store, State } from '@ngrx/store';
import { LOAD_ALL } from '../stores';
import { ViewSpliceModel, IndexRange, ViewSplice, ViewChannelData, FocusedRunRelogs } from "../models/splice.view.model";

//data
import { splices, runs, relogs, runData, relog1Data, relog2Data, focusedRunRelogs } from '../mockdata/splice.run.relog';

@Injectable()
export class SpliceboardFacadeService {



  public splice$: Store<any>;
  public activeSplice$: Observable<ViewSplice>;
  public splices$: Observable<Splice[]>;
  public fragmentsOfActiveSplice$: Observable<Fragment[]>;
  public viewChannelData$: Observable<ViewChannelData[]>;
  public viewChannelColor$: Observable<ViewChannelData[]>;
  public focusedRunRelogs$: Observable<FocusedRunRelogs>;

  //selectors
  public runRelogs$;
  public viewSpliceModel$: Observable<ViewSpliceModel>;
  public viewFragments$: Observable<Fragment[]>;
  public totalRange$: Observable<IndexRange>;

  constructor(private store: Store<any>) {
    this.splice$ = this.store.select('splice');
    this.splices$ = this.splice$.select("splices");
    this.viewChannelData$ = this.splice$.select("viewChannelData");
    this.viewChannelColor$ = this.splice$.select("viewChannelColor");
    this.focusedRunRelogs$ = this.splice$.select("focusedRunRelogs");

    this.activeSplice$ = this.splice$.select(s => this.selectActiveSplice(s));
    this.fragmentsOfActiveSplice$ = this.splice$.select(s => s.activeSplice.fragments);
    this.viewSpliceModel$ = this.splice$.select(s => this.selectViewSpliceModel(s));
    this.runRelogs$ = this.splice$.select(s => this.selectRunsRelogs(s));
    this.viewFragments$ = this.splice$.select(s => this.selectViewFragments(s));
    this.totalRange$ = this.splice$.select(s => this.selectTotalRange(s));
  }

  public load() {
    this.store.dispatch({ type: LOAD_ALL });
  }
  private selectActiveSplice(s: any): ViewSplice {
    // when updating the fragments, set loaded false and not emit active change.
    if (s.activeSplice && s.activeSplice.loaded)
      return s.activeSplice;
  }
  private selectViewSpliceModel(s: any): ViewSpliceModel {
    if (s.activeSplice && s.activeSplice.loaded &&
      s.runs && s.relogs && s.relogs.loaded) {
      //calculate range here

      return { activeSplice: s.activeSplice, runs: s.runs, relogs: s.relogs, totalRange: { start: 2000, stop: 6000 } }
    }
  }

  selectViewFragments(s: any): Fragment[] {
    if (s.focusedRunRelogs && s.activeSplice && s.activeSplice.loaded) {
      //calculate viewed fragments here
      return [{ id: "1", start: 3000, stop: 3300 },
      { id: "2", start: 3400, stop: 3800 }]
    }
  }

  private selectRunsRelogs(s: any): any {
    if (s.runs && s.relogs) {
      //calculate range here
      return { runs: s.runs, relogs: s.relogs, totalRange: { start: 2000, stop: 6000 } }
    }
  }

  private selectTotalRange(s: any): IndexRange {
    if (s.runs && s.relogs &&
      s.runs.loaded && s.relogs.loaded) {
      return { start: 2000, stop: 6000 };
    }
  }


}
