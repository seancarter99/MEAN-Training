import { Actor } from "./actor";

export class Movie {

   title: string;

   director: string;

   actors: Actor[] = [];

   genre: string;

   releaseYear?: number;

   imageUrl?: string;

   //category: string;// TODO add category to backend before use this

   constructor(title: string, director: string, genre: string) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    //this.category = category;
   }

}