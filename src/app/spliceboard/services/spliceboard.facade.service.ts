import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs/Subject';
import {  SpliceModel, RunRelog} from "../models/index";
import { spliceModels } from '../mockdata/splicemodels';
import { Observable } from 'rxjs/Observable';
import { runRelogs } from '../mockdata/runrelog';
import { Store } from '@ngrx/store';
import { LoadSplices, LoadActiveSplice, LoadRunRelogs } from '../stores';

@Injectable()
export class SpliceboardFacadeService {
  
  public activeSpliceModel$:Observable<SpliceModel>;

  public spliceModels$:Observable<SpliceModel[]>;

  public runRelogs$:Observable<RunRelog[]>;

  constructor(private store:Store<any>) {
    let splice$ = this.store.select('splice');
    this.spliceModels$ = splice$.select("spliceModels");
    this.activeSpliceModel$ = splice$.select("activeSpliceModel");
    this.runRelogs$ = splice$.select("runRelogs");
  }
  getAllRelativeData()
  {
    this.getAllSplices();
    this.getRunRelogs();
  }
  getAllSplices() {
    this.store.dispatch(new LoadSplices(spliceModels));
    this.store.dispatch(new LoadActiveSplice(spliceModels[0]));

  }
  getRunRelogs(): any {
    this.store.dispatch(new LoadRunRelogs(runRelogs));
  }
 

}
