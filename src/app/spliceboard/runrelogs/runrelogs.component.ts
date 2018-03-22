import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { RunRelog } from '../models';

@Component({
  selector: 'run-relogs',
  templateUrl: './runrelogs.component.html',
  styleUrls: ['./runrelogs.component.css']
})
export class RunrelogsComponent implements OnInit {

  private runRelogs$:Observable<RunRelog[]>;
  constructor(private spliceBoardFacadeService : SpliceboardFacadeService) { 
    this.runRelogs$ = this.spliceBoardFacadeService.runRelogs$;
  }

  ngOnInit() {
  }

}
