import { Injectable } from '@angular/core';
import { AppConfigurations } from './app.configuration';
import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/Observable';


@Injectable()
export class AppLoadService {
    constructor(private appConfigurations: AppConfigurations) { 

    }
    public getAppSettings() : Promise<any> {
        return new Promise((resolve, reject) => {
            this.appConfigurations.token = "token loaded";
            this.appConfigurations.urls = "all service urls";
            console.log("----------------APP_INITIALIZER: getAppSettings",this.appConfigurations);
            resolve(true);
        })
    }

    public getUrlParams() : Promise<any> {
        return new Promise((resolve, reject) => {
            this.appConfigurations.wellId = this.getParameterByName("wellId");
            this.appConfigurations.wellboreId = this.getParameterByName("wellboreId");
            console.log("----------------APP_INITIALIZER: getUrlParams",this.appConfigurations);
            resolve(true);
        })      
    }

    private getParameterByName(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
      }
}