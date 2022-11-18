import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

/*
  Dependency Injection

  follows the idea of inversion of control
  ususally the developer controls the lifecycle of objects and methods,
  inversion of control lets a framework do that instead of you

  singleton is the most common version of these - the framework by default just makes one
  services do not store state as a result
*/
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:9000/movies/';

  // angular uses HttpClient to make http requests
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<HttpResponse<Movie[]>> {
    return this.httpClient.get<Movie[]>(this.url, { observe: 'response' });
  }

  saveMovie(movie: Movie): Observable<HttpResponse<Movie>> {
    return this.httpClient.post<Movie>(this.url, movie, { observe: 'response' });
  }
}