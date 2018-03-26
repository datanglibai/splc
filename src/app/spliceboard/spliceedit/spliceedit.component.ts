import { Component, OnInit } from '@angular/core';
import { SpliceboardFacadeService } from '../services/spliceboard.facade.service';
import { Observable } from 'rxjs/Observable';
import { ViewSpliceModel, ViewChannelData, ViewSplice, Fragment, FocusedRunRelogs } from '../models';

@Component({
  selector: 'splice-edit',
  templateUrl: './spliceedit.component.html',
  styleUrls: ['./spliceedit.component.css']
})
export class SpliceeditComponent implements OnInit {
  private activeSplice$:Observable<ViewSplice>;
  private data$:Observable<ViewChannelData[]>;
  private previewData:ViewChannelData;
  private viewedFragments$:Observable<Fragment[]>;
  private focusedRunRelogs$: Observable<FocusedRunRelogs>;
  private viewSpliceModel$;
  constructor(private spliceBoardFacadeService : SpliceboardFacadeService) { 
    this.activeSplice$ = this.spliceBoardFacadeService.activeSplice$;
    this.data$ = this.spliceBoardFacadeService.viewChannelData$;
    this.viewedFragments$ = this.spliceBoardFacadeService.viewFragments$;
    this.focusedRunRelogs$ = this.spliceBoardFacadeService.focusedRunRelogs$;
    //this.viewSpliceModel$ = this.spliceBoardFacadeService.viewSpliceModel$;
  }

  ngOnInit() {
    //this.viewSpliceModel$.subscribe((v)=> {console.log('in run relogs', v)});
    this.focusedRunRelogs$.subscribe((v)=> {console.log('in splice edit', v)});
    this.data$.subscribe((data)=>{
      console.log('channel data state init in edit', data);
      if(data)
      {
        this.previewData = data[0];
      }
    })
  }

  private addFragment()
  {

  }

  private updateFragment(){

  }

  private deleteFragment(){

  }

}
