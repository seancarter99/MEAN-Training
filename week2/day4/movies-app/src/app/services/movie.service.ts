import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs'; // adding error handling -- new functionality we are adding today!
import { environment } from 'src/environments/environment';
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
  url = environment.apiUrl;

  // angular uses HttpClient to make http requests
  constructor(private httpClient: HttpClient) { }

  findGenre(genre: string): Observable<HttpResponse<Movie[]>> {
    return this.httpClient.get<Movie[]>(this.url + "?genre=" + genre, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  findAll(): Observable<HttpResponse<Movie[]>> {
    return this.httpClient.get<Movie[]>(this.url, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  saveMovie(movie: Movie): Observable<HttpResponse<Movie>> {
    return this.httpClient.post<Movie>(this.url, movie, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // translate the HTTP error code into a Stacktrace
    console.log(error);
    return throwError(()=>{
       throw new Error('This is a custom message about our error'); // create a stacktrace
    }); //return empty Observable
  }
}