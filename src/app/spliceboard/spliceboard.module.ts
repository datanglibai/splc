import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpliceboardComponent } from './spliceboard.component';
import { RunrelogsComponent } from './runrelogs/runrelogs.component';
import { SpliceeditComponent } from './spliceedit/spliceedit.component';
import { SpliceboardFacadeService } from './services/spliceboard.facade.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from "./stores";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('splice',reducers),
    EffectsModule.forFeature(effects),    
  ],
  providers:[SpliceboardFacadeService],
  declarations: [SpliceboardComponent, RunrelogsComponent, SpliceeditComponent]
})
export class SpliceboardModule { }
