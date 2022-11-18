import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoatComponent } from './goat/goat.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewMovie2Component } from './new-movie2/new-movie2.component';
import { GenreListComponent } from './genre-list/genre-list.component'; 

// where all of your routes live
const routes: Routes = [
  {
    path: 'GOAT', component: GoatComponent
  },
  {
    path: 'movies', component: MovieListComponent
  },
  {
    path: 'new-movie', component: NewMovie2Component
  },
  {
    path: 'movies/:genre', component: GenreListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }