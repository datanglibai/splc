import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SpliceboardFacadeService } from './services/spliceboard.facade.service';
import { SpliceModel } from './models';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'splice-board',
  templateUrl: './spliceboard.component.html',
  styleUrls: ['./spliceboard.component.css']
})
export class SpliceboardComponent implements OnInit {
  
  //private spliceModels:SpliceModel[];
  private spliceModels$ : Observable<SpliceModel[]>;
  private activeSpliceModels$ : Observable<SpliceModel>;

  constructor(private spliceBoardFacaseService : SpliceboardFacadeService, private store:Store<any>, private ref : ChangeDetectorRef) { 
    this.spliceModels$ = this.spliceBoardFacaseService.spliceModels$;
    this.activeSpliceModels$ = this.store.select('splice').select('activeSpliceModel');
    //this.spliceBoardFacaseService.activeSpliceModel$;

    this.spliceModels$.subscribe((v) => 
    {//this.spliceModels = v
    console.log(v);});
  }

  ngOnInit() {
    this.spliceBoardFacaseService.getAllRelativeData();
    //this.ref.markForCheck();
  }

}
