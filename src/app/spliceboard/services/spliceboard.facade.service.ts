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
  
  public load() {
    this.loadSplices();
    this.loadRuns();
    this.loadRelogs();
  }
  
  private loadSplices() {
    this.store.dispatch(new LoadSplices(splices));
    this.store.dispatch(new LoadActiveSplice({ splice: splices[0], loaded: true }));

  }

  private loadRuns(): any {
    this.store.dispatch(new LoadRuns({ runs: runs, loaded: true }))
  }

  private loadRelogs(): any {
    this.store.dispatch(new LoadRelogs({ relogs: relogs, loaded: true }));
  }

}
