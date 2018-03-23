import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Splice, Run } from "../models/index";
import { splices, runs, relogs } from '../mockdata/splice.run.relog';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { LoadSplices, LoadActiveSplice, LoadRuns, LoadRelogs } from '../stores';
import { ViewRelogs, ViewRuns } from "../models/splice.view.model";

@Injectable()
export class SpliceboardFacadeService {

  public activeSplice$: Observable<Splice>;
  public splices$: Observable<Splice[]>;
  public viewRuns$: Observable<ViewRuns>;
  public viewRelogs$: Observable<ViewRelogs>;

  constructor(private store: Store<any>) {
    let splice$ = this.store.select('splice');
    this.splices$ = splice$.select("splices");
    this.activeSplice$ = splice$.select("activeSplice");
    this.viewRuns$ = splice$.select("viewRuns");
    this.viewRelogs$ = splice$.select("viewRelogs");
  }
  
  public getAllRelativeData() {
    this.getSplices();
    this.getRuns();
    this.getRelogs();
  }
  
  private getSplices() {
    this.store.dispatch(new LoadSplices(splices));
    this.store.dispatch(new LoadActiveSplice({ splice: splices[0], loaded: true }));

  }

  private getRuns(): any {
    this.store.dispatch(new LoadRuns({ runs: runs, loaded: true }))
  }

  private getRelogs(): any {
    this.store.dispatch(new LoadRelogs({ relogs: relogs, loaded: true }));
  }

}
