import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../shared/movie.model";

@Injectable()
export class FavoriteService {
    private httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
      
    private readonly apiUrl : string;

    constructor( private _httpClient: HttpClient) {
        this.apiUrl = 'https://localhost:7076/api';
    }

    addFavorites(movie : Movie) : Observable<any>{
        let endpoint = `${this.apiUrl}/v1/favorites`;
        return this._httpClient.post(endpoint, movie, this.httpOption);
    }

    getFavorites() : Observable<any>{
        let endpoint = `${this.apiUrl}/v1/favorites`;
        return this._httpClient.get(endpoint, this.httpOption);
    }
}