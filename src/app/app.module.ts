import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppComponent } from './app.component';
import { SpliceboardComponent } from './spliceboard/spliceboard.component';
import { SpliceboardModule } from './spliceboard';
import { AppConfigurations } from './app.configuration';
import { AppLoadService } from './app.load.service';

export function get_settings(appLoadService: AppLoadService) {
  return () => appLoadService.getAppSettings();
}

export function get_url_params(appLoadService: AppLoadService) {
  return () => appLoadService.getUrlParams();
}

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
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Splice Store DevTools'
      //,
      //logOnly: environment.production,
    }),
  ],
  providers: [
    AppConfigurations, 
    AppLoadService,
    {
      provide: APP_INITIALIZER,
      useFactory: get_settings,
      deps: [AppLoadService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: get_url_params,
      deps: [AppLoadService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
