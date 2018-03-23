import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { ViewRuns, ViewRelogs, ViewSplice , FocusedRunRelogs} from '../models';

@Component({
  selector: 'run-relogs',
  templateUrl: './runrelogs.component.html',
  styleUrls: ['./runrelogs.component.css']
})
export class RunrelogsComponent implements OnInit {

  private viewRuns$:Observable<ViewRuns>;
  private viewRelogs$:Observable<ViewRelogs>;
  private activeSplice$:Observable<ViewSplice>;
  private focusedRunRelogs$: Observable<FocusedRunRelogs>;
  constructor(private spliceBoardFacadeService : SpliceboardFacadeService) { 
    this.viewRuns$ = this.spliceBoardFacadeService.viewRuns$;
    this.viewRelogs$ = this.spliceBoardFacadeService.viewRelogs$;
    //this.spliceBoardFacadeService.viewSpliceModel$.subscribe(v=> console.log('combined state', v));
    this.activeSplice$ = this.spliceBoardFacadeService.activeSplice$;
    this.focusedRunRelogs$ = this.spliceBoardFacadeService.focusedRunRelogs$;
  }

  ngOnInit() {
    this.activeSplice$.subscribe(v=>this.updateRelogStyles(v));    
  }

  private updateRelogStyles(activeSplice: ViewSplice){

  }

}
