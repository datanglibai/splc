import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    SpliceboardModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Splice Store DevTools'
      //,
      //logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
