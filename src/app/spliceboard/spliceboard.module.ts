import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpliceboardComponent } from './spliceboard.component';
import { RunrelogsComponent } from './runrelogs/runrelogs.component';
import { SpliceeditComponent } from './spliceedit/spliceedit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpliceboardComponent, RunrelogsComponent, SpliceeditComponent]
})
export class SpliceboardModule { }
