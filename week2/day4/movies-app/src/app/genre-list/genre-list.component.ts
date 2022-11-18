import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  title: string = "";

  movieList: Movie[] = [];

  errorMessage: string = "";

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {
    
    const genre: string = this.route.snapshot.paramMap.get("genre") || ""; // use default when null 
    this.title = genre;
    this.movieService.findGenre(genre).subscribe({
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
