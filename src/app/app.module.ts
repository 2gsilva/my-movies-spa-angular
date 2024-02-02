import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './routes/app.routes';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MoviesListComponent,
    MovieItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TopBarComponent,
    MoviesListComponent,
    MovieItemComponent
  ]
})
export class AppModule { }
