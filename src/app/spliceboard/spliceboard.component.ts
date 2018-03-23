import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from './services/spliceboard.facade.service';
import { Splice, Run, ViewSplice } from './models';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'splice-board',
  templateUrl: './spliceboard.component.html',
  styleUrls: ['./spliceboard.component.css']
})
export class SpliceboardComponent implements OnInit {
  
  //private spliceModels:SpliceModel[];
  private splices$ : Observable<Splice[]>;
  private activeSplice$ : Observable<ViewSplice>;

  constructor(private spliceBoardFacadeService : SpliceboardFacadeService, private store:Store<any>) { 
    this.splices$ = this.spliceBoardFacadeService.splices$;
    this.activeSplice$ = this.spliceBoardFacadeService.activeSplice$;
  }

  ngOnInit() {    
    this.spliceBoardFacadeService.load();
  }
  ngAfterViewInit() {
  }

}
