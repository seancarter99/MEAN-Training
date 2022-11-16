import { Actor } from "./actor";

export class Movie {

   title: string;

   director: string;

   actors: Actor[] = [];

   releaseYear?: number;

   imageUrl?: string;

   category: string;// TODO add category to backend before use this

   constructor(title: string, director: string, category: string) {
    this.title = title;
    this.director = director;
    this.category = category;
   }

}