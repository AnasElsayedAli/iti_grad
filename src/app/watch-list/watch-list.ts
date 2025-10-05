import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  templateUrl: './watch-list.html',
  styleUrls: ['./watch-list.css']
})
export class WatchList implements OnInit {
  movies: any[] = [];
  isLoaded: boolean = false;

  ngOnInit(): void {
    const stored = localStorage.getItem('watchlist');
    if (stored) {
      this.movies = JSON.parse(stored);
    }
    this.isLoaded = true;
  }

  removeFromWatchlist(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
    localStorage.setItem('watchlist', JSON.stringify(this.movies));
  }
}
