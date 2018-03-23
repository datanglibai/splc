import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { ViewRuns } from '../models';

@Component({
  selector: 'run-relogs',
  templateUrl: './runrelogs.component.html',
  styleUrls: ['./runrelogs.component.css']
})
export class RunrelogsComponent implements OnInit {

  private viewRuns$:Observable<ViewRuns>;
  constructor(private spliceBoardFacadeService : SpliceboardFacadeService) { 
    this.viewRuns$ = this.spliceBoardFacadeService.viewRuns$;
  }

  ngOnInit() {
  }

}
