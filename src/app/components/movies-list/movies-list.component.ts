import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent {  
  search: string = '';
  movie: string = '';

  pesquisar() {
    this.movie = this.search;
  }

}
