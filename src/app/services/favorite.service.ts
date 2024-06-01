import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../shared/movie.model";
import { BaseService } from "./base.service";

@Injectable()
export class FavoriteService extends BaseService {
    
    addFavorites(movie : Movie) : Observable<any>{
        let endpoint = `${this.getApiUrl()}/api/v1/favorites`;
        return this._httpClient.post(endpoint, movie, this.httpOption);
    }

    getFavorites() : Observable<any>{
        let endpoint = `${this.getApiUrl()}/api/v1/favorites`;
        return this._httpClient.get(endpoint, this.httpOption);
    }
}