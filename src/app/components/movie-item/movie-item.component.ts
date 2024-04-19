import { Component, Input } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input('movie') movie!: string;
  
  movies: {
    id : string,
    title : string,
    year : string,
    poster : string
  }[] = [];

    message?: string;

  constructor(
    private _movieService : MovieService,
    private _favoriteService: FavoriteService
  ) {};

  ngOnChanges() {
    this.onMovieChange();
  }

  onMovieChange(){
    this.getMovies();
  }

  getMovies(): void {
    this._movieService
      .getMovies(this.movie)
      .subscribe(
        (res: { 
          id: string;
          title: string;
          year: string;
          poster: string
        }[]) => (this.movies = res) 
      );
  }

  addFavorites(movie : any): void {
    let favorite : any = {
      search :  movie,
      avaliacao : null,
      descricao : null
    } ;

    this._favoriteService
      .addFavorites(favorite)
      .subscribe(
        (res: { 
          message: string;
        }[]) => (this.message = res[0].message) 
      );
  }
}
