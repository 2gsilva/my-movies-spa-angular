import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FavoriteService } from 'src/app/services/favorite.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieModel } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input('movie') movie!: string;
  
  movies: MovieModel[] = [];

  movieSelected?: any;

  message?: string;

  formulario!: FormGroup

  constructor(
    private _movieService : MovieService,
    private _favoriteService: FavoriteService,
    private formBuilder: FormBuilder
  ) {};

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      descricao: ['', [Validators.required]],
      avaliacao: ['', [Validators.min(0), Validators.max(4)]]
    });
  }

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

  selectMovie(movie : any){
    this.movieSelected = movie;
  }

  addFavorites(): void {
    let favorite : any = {
      search :  this.movieSelected,
      avaliacao : this.formulario?.get("avaliacao")?.value,
      descricao : this.formulario?.get("descricao")?.value
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
