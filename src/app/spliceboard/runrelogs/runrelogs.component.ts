import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { ViewSplice, Fragment, FocusedRunRelogs } from '../models';

@Component({
  selector: 'run-relogs',
  templateUrl: './runrelogs.component.html',
  styleUrls: ['./runrelogs.component.css']
})
export class RunrelogsComponent implements OnInit {
  private runRelogs$;
  private viewSpliceModel$;
  private fragmentsOfActiveSplice$: Observable<Fragment[]>;
  private focusedRunRelogs$: Observable<FocusedRunRelogs>;
  constructor(private spliceBoardFacadeService: SpliceboardFacadeService) {
    this.runRelogs$ = this.spliceBoardFacadeService.runRelogs$;
    //this.fragmentsOfActiveSplice$ = this.spliceBoardFacadeService.fragmentsOfActiveSplice$;
    this.viewSpliceModel$ = this.spliceBoardFacadeService.viewSpliceModel$;
    this.focusedRunRelogs$ = this.spliceBoardFacadeService.focusedRunRelogs$;
  }

  ngOnInit() {
    this.focusedRunRelogs$.subscribe((v)=> {console.log('in run relogs', v)});
    //this.viewSpliceModel$.subscribe((v)=> {console.log('in run relogs', v)});
    this.fragmentsOfActiveSplice$.subscribe(v => this.updateRelogStyles(v));

  }

  private updateRelogStyles(activeSplice: Fragment[]) {

  }

}
