import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css']
})
export class MovieDetails {
  movie: any = null;
  isLoaded: boolean = false;

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzNGJhZjI5MTJlZjA3ZTBlMDA5OGJlZTRmN2VlZiIsIm5iZiI6MTc1ODI5NTA0NS4zLCJzdWIiOiI2OGNkNzQwNWU0MzMxMjNiOWFjM2ZmODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ijxIvtOBMTNx7oWuwRHVZwewUKiJNM3EyUbxuxumRpc'
    }
  };

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, this.options)
      .then(res => res.json())
      .then(data => {
        this.movie = data;
        this.isLoaded = true;
        this.cd.detectChanges();
      });
  }
}
