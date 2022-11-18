
# Adding Query Parameters to Routes

Today we looked at how to use query parameters in our Angular routes. Query parameters are the key-value pairs you'll see in the url like:

`http://localhost:4200/movies?genre=comedy`

Looking back, I lost track of this and instead we created some parameterized subroutes:

`http://localhost:4200/movies/genre/{value}` 

Which we used:
`http://localhost:4200/movies/genre/comedy` 
`http://localhost:4200/movies/genre/action` 
`http://localhost:4200/movies/genre/drama` 

To play around with query parameters, see https://angular.io/guide/router#link-parameters-array

To make some parameterized subroutes, we can do the following:

# Adding Parameterized SubRoutes

Routes allow our single-page application to switch which components are shown depending on the url. So far we have the `/movies` route showing the MovieListComponent and the `/new-movie` route showing the NewMovie2Component.

Let's add a new component to display when the user searches for a particular genre.

# Step 1: Create a new method for findByGenre

In the movie.service.ts file, add the following method to search by genre:

```TypeScript
  findByGenre(genre: string): Observable<HttpResponse<Movie[]>> {
    return this.httpClient.get<Movie[]>(this.url + "?genre=" + genre, 
         { observe: 'response' }).pipe(catchError(this.handleError));
  }
```

This calls our backend which is set up to return just the movies with the provided genre. (If the genre is not found, it returns no movies.)

# Step 2: Create a new component

In the terminal, make sure you are in your project folder and run the command:

```cmd
ng g c genre
```

In your component's genre.comopnent.html file, let's add some HTML

```HTML
<h2>{{ title }} Movies</h2>
<table class="table table-bordered table-striped table-hover table-dark">
    <thead>
        <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Year</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let movie of movieList">
            <td>{{ movie.title }}</td>
            <td>{{ movie.director }}</td>
            <td>{{ movie.releaseYear }}</td>
        </tr>
    </tbody>
</table>
<a routerLink="/movies">Back</a>
```

Let's break down the parts of this HTML we have added:
1. In our h2 heading we have added a template expression in {{ }} that Angular will parse. The value of the variable `title` is defined in the genre.component.ts file. (We will add this code next.)
2. Our table is using style classes from Bootstrap, so these styles will only get applied if you have the Bootstrap CSS file from their cdn (content delivery network) linked in your `index.html` file's `<head>` tag:

```HTML
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
```

3. Next our table contains a table row for the headers and a table row for each of the movies. Angular does this for us with the `*ngFor` directive.
4. At the bottom we have added a router link to take us back to the list of all the movies.

Next let's add to the genre.component.ts file:

```TypeScript
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreListComponent implements OnInit {
  title: string = "";
  movieList: Movie[] = [];
  errorMessage: string = "";

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {
    const genre: string = this.route.snapshot.paramMap.get("genre") || ""; // use default when null
    this.title = genre;
    this.movieService.findByGenre(genre).subscribe({
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
```

To summarize, we have added
1. Three properties: title, moveList, and errorMessage
2. Three dependencies are being injected into the constructor: MovieService, ActiveRoute, and Location
	1. Make sure each of these is also imported at the top of the file.
3. Most of the work is happening in the ngOnInit() method which gets run whenever our component is rendered to the screen.
	1. First we ask the ActivatedRoute what query parameters were provided in the url, specifically we ask for the value of "genre" 
	2. Then we use this query parameter to set the value of the title property
	3. Then we use the query parameter in our call to the movieService
	4. Then we do some error handling in the subscribe method.

# Step 3: Add a Route to display the component

In app-routing.module.ts, import the genre component and add a route path.

```TypeScript
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
    path: 'movies/:genre', component: GenreComponent
  }
];
```

# Step 4: Test your Page

Make sure your backend is running, and then try testing the links you have added.

	1. Open your backend project and run `npm start`
	2. Open the terminal in your front-end project folder and run `ng serve --open` 
