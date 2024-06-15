import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieModel } from "../shared/models/movie.model";
import { BaseService } from "./base.service";

@Injectable()
export class FavoriteService extends BaseService {
    
    addFavorites(movie : MovieModel) : Observable<any>{
        let endpoint = `${this.getApiUrl()}/api/v1/favorites`;
        return this._httpClient.post(endpoint, movie, this.httpOption);
    }

    getFavorites() : Observable<any>{
        let endpoint = `${this.getApiUrl()}/api/v1/favorites`;
        return this._httpClient.get(endpoint, this.httpOption);
    }
}