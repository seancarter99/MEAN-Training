import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Actor } from '../models/actor';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-new-movie2',
  templateUrl: './new-movie2.component.html',
  styleUrls: ['./new-movie2.component.css']
})
export class NewMovie2Component implements OnInit {
  //define a form group,
  //tell it the fields i want,
  //tell it any validations we want

  //gives you a way to make forms that grow and string
  //can split fields more easily
  movieForm = this.fb.group({
    title: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
    director: ['', Validators.required],
    genre: ['', Validators.required],
    releaseYear: ['', Validators.compose([Validators.min(1970), Validators.required])],
    actors: this.fb.array([])
  });

  errorMessage?: string;

  constructor(private fb: FormBuilder, private movieService:MovieService) { }

  ngOnInit(): void {
  }

  // ? means it can be undefined
  // ! means it wont be null
  onSubmit() {
    let temp = new Movie(this.title?.value!, this.director?.value!, this.genre?.value!);
    temp.releaseYear = parseInt(this.releaseYear?.value!);

    //loop through list of actors and convert to Actor object
    let movieActors = <FormArray>this.movieForm.controls.actors;
    for (let c of movieActors.controls) {
      temp.actors.push(new Actor(c.value));
    }

    this.movieService.saveMovie(temp).subscribe({
      next: res => {console.log('HTTP response', res), this.errorMessage = "";}, // first param is what to do on success
      error: err => {console.log('HTTP error', err); this.errorMessage = "Error: Unable to save movie. Try again later."}, // second param is what to do on failure
      complete: () => console.log('HTTP request completed') // third param is what to always do on completion
  });
  }

  addActor() {
    this.actors.push(this.fb.control(''));
  }

  //need getters to be able to access the information in the form
  get title() {
    return this.movieForm!.get('title');
  }

  get director() {
    return this.movieForm!.get('director');
  }

  get genre() {
    return this.movieForm!.get('genre');
  }

  get releaseYear() {
    return this.movieForm!.get('releaseYear');
  }

  get actors() {
    return this.movieForm!.get('actors') as FormArray;
  }
}