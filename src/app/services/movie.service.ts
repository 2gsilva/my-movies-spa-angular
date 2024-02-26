import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MovieService {
    private httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
      
    private readonly apiUrl : string;

    constructor( private _httpClient: HttpClient) {
        this.apiUrl = 'http://localhost:8080/api';
    }

    getMovies(movie : string) : Observable<any>{
        let endpoint = `${this.apiUrl}/v1/movies/${movie}`;
        return this._httpClient.get(endpoint, this.httpOption);
    }
}