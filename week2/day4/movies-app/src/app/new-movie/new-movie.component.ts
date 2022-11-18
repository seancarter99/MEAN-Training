import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  newMovie: Movie = new Movie("", "", ""); //we'll be adding to this through the form

  errorMessage?: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.newMovie.title.trim() != "" 
        && this.newMovie.genre.trim() != ""
        && this.newMovie.director.trim() != "") {
      //send the values
      this.movieService.saveMovie(this.newMovie).subscribe({
        next: (v) => console.log(v),
        error: (e) => {console.error(e), this.errorMessage = "Error: Unable to fetch movies. Try again later."; },
        complete: () => console.info('complete')});
        }}
  }
