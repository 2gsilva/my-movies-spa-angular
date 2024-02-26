import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './routes/app.routes';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Declaração dos componentes
  declarations: [
    AppComponent,
    TopBarComponent,
    MoviesListComponent,
    MovieItemComponent,
    HomeComponent
  ],
  // Importação dos módulos
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    FormsModule
  ],
  // Injeção dos serviços do módulo
  providers: [
    MovieService 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
