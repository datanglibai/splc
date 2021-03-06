import { Injectable } from '@angular/core';
import { Splice, Run, Fragment, Relog } from "../models/index";
import { Observable } from 'rxjs/Observable';
import { Store, State } from '@ngrx/store';
import { LOAD_ALL, ADD_FRAGMENT, UPDATE_FRAGMENT, DELETE_FRAGMENT, AddFragment, FocusedRunRelogsSet, ChannelDataUpdated, DataColorUpdated, ActiveSpliceSet } from '../stores';
import { ViewSpliceModel, IndexRange, ViewSplice, ViewChannelData, FocusedRunRelogs } from "../models";
import * as mockData from '../mockdata/splice.run.relog';

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

  constructor(private store: Store<any>) {
    this.splice$ = this.store.select('splice');
    this.splices$ = this.splice$.select("splices");
    this.viewChannelData$ = this.splice$.select("viewChannelData");
    this.viewChannelColor$ = this.splice$.select("viewChannelColor");
    this.focusedRunRelogs$ = this.splice$.select("focusedRunRelogs");
    this.activeSplice$ = this.splice$.select("activeSplice");

    this.fragmentsOfActiveSplice$ = this.splice$.select(s=>this.selectFragmentsOfActiveSplice(s));
    this.viewSpliceModel$ = this.splice$.select(s => this.selectViewSpliceModel(s));
    this.runRelogs$ = this.splice$.select(s => this.selectRunsRelogs(s));
    this.viewFragments$ = this.splice$.select(s => this.selectViewFragments(s));
    this.fragmentsOfActiveSplice$.subscribe((v)=>{
      //calculate 
      this.store.dispatch(new ChannelDataUpdated([mockData.updatedRunData,mockData.relog1Data]));
      this.store.dispatch(new DataColorUpdated(undefined));
    })
  }

  public load() {
    this.store.dispatch({ type: LOAD_ALL });
  }

  public switchActiveSplice(s:ViewSplice)
  {
    this.store.dispatch(new ActiveSpliceSet(s));
  }

  public AddFragment(){
    this.store.dispatch(new AddFragment(mockData.fragmentSample));

  }

  public UpdateFragment(){
    this.store.dispatch({ type: UPDATE_FRAGMENT });
  }

  public RemoveFragment(){
    this.store.dispatch({ type: DELETE_FRAGMENT });    
  }
  
  private selectFragmentsOfActiveSplice(s: any): Fragment[] {
    // when updating the fragments, set loaded false and not emit active change.
    if (s.activeSplice )
      return s.activeSplice.fragments;
  }
  private selectActiveSplice(s: any): ViewSplice {
    // when updating the fragments, set loaded false and not emit active change.
    if (s.activeSplice && s.activeSplice.loaded)
      return s.activeSplice;
  }
  private selectViewSpliceModel(s: any): ViewSpliceModel {
    if (s.activeSplice && s.activeSplice.loaded &&
      s.runs && s.relogs) {
      //calculate range here      
      return { activeSplice: s.activeSplice, runs: s.runs, relogs: s.relogs, totalRange: { start: 2000, stop: 6000 } }
    }
  }

  private selectViewFragments(s: any): Fragment[] {
    if (s.focusedRunRelogs && s.activeSplice && s.activeSplice.loaded) {
      //calculate viewed fragments here
      return [{ id: "1", start: 3000, stop: 3300 }]
    }
  }

  private selectRunsRelogs(s: any): any {
    if (s.runs && s.relogs) {
      //calculate range here
      return { runs: s.runs, relogs: s.relogs, totalRange: { start: 2000, stop: 6000 } }
    }
  }


}
