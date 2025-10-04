import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlicePipe, RouterModule, Hero, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  movies: any[] = [];
  isloaded: boolean = false;
  query: string = '';

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzNGJhZjI5MTJlZjA3ZTBlMDA5OGJlZTRmN2VlZiIsIm5iZiI6MTc1ODI5NTA0NS4zLCJzdWIiOiI2OGNkNzQwNWU0MzMxMjNiOWFjM2ZmODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ijxIvtOBMTNx7oWuwRHVZwewUKiJNM3EyUbxuxumRpc'
    }
  };
  

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(query: string = '') {
  const url = query
    ? `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1&include_adult=false`
    : `https://api.themoviedb.org/3/discover/movie?with_genres=16&with_original_language=ja&include_adult=false&sort_by=popularity.desc&language=en-US&page=1`;

  fetch(url, this.options)
    .then(res => res.json())
    .then(data => {
      const blacklist = ["hentai", "ecchi", "nsfw", "ero", "xxx", "18+"];

      this.movies = (data.results || []).filter((movie: any) => {
        const title = (movie.title || movie.name || "").toLowerCase();
        const overview = (movie.overview || "").toLowerCase();

        return (
          !movie.adult && // لازم ما يكونش +18
          movie.vote_count > 50 && // يتشاف إن في ناس قيمته (مش عشوائي)
          !blacklist.some(
            word => title.includes(word) || overview.includes(word)
          )
        );
      });

      this.isloaded = true;
      this.cd.detectChanges();
    })
    .catch(err => {
      console.error("Error fetching anime:", err);
      this.isloaded = true;
    });
}


  onSearch() {
    this.isloaded = false;
    this.loadMovies(this.query);
  }
}
