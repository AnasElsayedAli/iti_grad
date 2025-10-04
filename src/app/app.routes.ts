import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Error } from './error/error';
import { MovieDetails } from './movie-details/movie-details';

export const routes: Routes = [
    { path: '', component: Home },                
    { path: 'about', component: About },
    { path: 'movie-details/:id', component: MovieDetails },
    { path: '**', component: Error }   // ✅ ده يبقى في الآخر دايمًا
];

