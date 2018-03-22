import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SpliceboardComponent } from './spliceboard/spliceboard.component';
import { SpliceboardModule } from './spliceboard';

const routes: Routes = [
  { path: '', redirectTo: '/spliceboard', pathMatch: 'full' },
  {
    path: 'spliceboard',
    component: SpliceboardComponent    
  },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SpliceboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
