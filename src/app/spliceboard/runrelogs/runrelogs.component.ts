import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';

@Component({
  selector: 'run-relogs',
  templateUrl: './runrelogs.component.html',
  styleUrls: ['./runrelogs.component.css']
})
export class RunrelogsComponent implements OnInit {

  constructor(private spliceModelFacadeService : SpliceboardFacadeService) { }

  ngOnInit() {
  }

}
