import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movies: any[] = [];
  isloaded:boolean = false;
  options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzNGJhZjI5MTJlZjA3ZTBlMDA5OGJlZTRmN2VlZiIsIm5iZiI6MTc1ODI5NTA0NS4zLCJzdWIiOiI2OGNkNzQwNWU0MzMxMjNiOWFjM2ZmODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ijxIvtOBMTNx7oWuwRHVZwewUKiJNM3EyUbxuxumRpc'
  }
};
constructor(private cd: ChangeDetectorRef) {}

ngOnInit() {
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', this.options)
    .then(res => res.json())
    .then(data => {
      this.movies = data.results;
      this.isloaded = true;
      this.cd.detectChanges(); 
    });
}
}
