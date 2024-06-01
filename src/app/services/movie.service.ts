import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

@Injectable()
export class MovieService extends BaseService {  
    
    getMovies(movie : string) : Observable<any>{
        let endpoint = `${this.getApiUrl()}/api/v1/movies/${movie}`;
        return this._httpClient.get(endpoint, this.httpOption);
    }
}