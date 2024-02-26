import { Component, Input } from '@angular/core';
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

  constructor(private _movieService : MovieService) {};

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
}
