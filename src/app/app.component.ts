import { Component } from '@angular/core';
import { AppConfigurations } from './app.configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private appConfigurations : AppConfigurations){
    console.log("--------- In App Construcor", this.appConfigurations);
  }
}
