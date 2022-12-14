import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];

  errorMessage?: string;

  constructor(private movieService: MovieService) { }

  //ng = angular
  //lifecycle method
  //on initialization do something
  ngOnInit(): void {
    this.movieService.findAll().subscribe({
      next: (data) => {
      //must subscribe to your observable
      //nothing happens until you subscribe
      if (data.body != null) {
        this.movieList = data.body;
      }
    },
      error: (err) => { console.log(err); this.errorMessage = "Error fetching movies. Try again later."; }
    });
  }

}
