import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from './services/spliceboard.facade.service';
import { SpliceModel, RunRelog } from './models';
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
  private activeSpliceModel$ : Observable<SpliceModel>;

  constructor(private spliceBoardFacadeService : SpliceboardFacadeService, private store:Store<any>) { 
    this.spliceModels$ = this.spliceBoardFacadeService.spliceModels$;
    this.activeSpliceModel$ = this.spliceBoardFacadeService.activeSpliceModel$;
    
  }

  ngOnInit() {
    this.spliceBoardFacadeService.getAllRelativeData();
  }
  ngAfterViewInit() {
  }

}
