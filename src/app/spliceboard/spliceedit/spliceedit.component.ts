import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { ViewSpliceModel, ViewChannelData, ViewSplice } from '../models';

@Component({
  selector: 'splice-edit',
  templateUrl: './spliceedit.component.html',
  styleUrls: ['./spliceedit.component.css']
})
export class SpliceeditComponent implements OnInit {
  private activeSplice$:Observable<ViewSplice>;
  private data$:Observable<ViewChannelData[]>;
  private previewData:ViewChannelData;
  constructor(private spliceBoardFacadeService : SpliceboardFacadeService) { 
    this.activeSplice$ = this.spliceBoardFacadeService.activeSplice$;
    this.data$ = this.spliceBoardFacadeService.viewChannelData$;
  }

  ngOnInit() {
    this.data$.subscribe((data)=>{
      console.log('channel data state init in edit', data);
      if(data)
      {
        this.previewData = data[0];
      }
    })
  }

  private setActiveSplice(spliceName)
  {
    
  }

  private addFragment()
  {

  }

  private updateFragment(){

  }

  private deleteFragment(){

  }

}
