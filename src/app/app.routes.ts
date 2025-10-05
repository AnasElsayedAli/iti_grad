import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Error } from './error/error';
import { WatchList } from './watch-list/watch-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'watch-list', component: WatchList },
  { path: '**', component: Error },
];
