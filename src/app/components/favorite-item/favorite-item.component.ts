import { Component, Input } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent {
  @Input('favorite') favorite!: string;
  
  favorites: {
    avaliacao : number,
    descricao : string,
    search : any
  }[] = [];

    message?: string;

  constructor(
    private _favoriteService: FavoriteService
  ) {};

  ngOnInit(){
    this.getFavorite();
    console.log(this.favorites);
  }

  getFavorite(): void {
    this._favoriteService
      .getFavorites()
      .subscribe(
        (res: { 
          avaliacao: number;
          descricao: string;
          search: any;
        }[]) => (this.favorites = res) 
      );
  }
}
