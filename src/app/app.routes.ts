


import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Tours } from './pages/tours/tours';

export const routes: Routes = [
  { path: '', component: Home },             // Home page layout
  { path: 'tour', component: Tours }, // Dynamic page with ID
  { path: '**', redirectTo: '' }                       // Redirect 404s to home
];
