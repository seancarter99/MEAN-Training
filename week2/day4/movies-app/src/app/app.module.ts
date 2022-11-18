import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { GoatComponent } from './goat/goat.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMovie2Component } from './new-movie2/new-movie2.component';
import { GenreListComponent } from './genre-list/genre-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieGalleryComponent,
    HeaderComponent,
    MovieListComponent,
    GoatComponent,
    NewMovieComponent,
    NewMovie2Component,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }