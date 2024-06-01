import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BaseService {
    protected httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    protected _apiUrl! : string;
    private _appSettings : any;

    constructor( protected _httpClient: HttpClient) {}

    getAppSettings() : Observable<any> {
        return this._httpClient.get('./assets/json/appsettings.json', this.httpOption) 
    }   

    getApiUrl() : string{
        this.getAppSettings()
        .subscribe(res => {
            this._appSettings = res;
        });

        return this._apiUrl = this._appSettings?.my_movies_api;
    }
    
}