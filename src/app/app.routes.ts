


import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Tours } from './pages/tours/tours';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Destinations } from './pages/destinations/destinations';
import { DestinationDetails } from './pages/destination-details/destination-details';
import { Listing } from './pages/listing/listing';

import { Contact } from './pages/contact/contact';
import { TripDetail } from './pages/trip-detail/trip-detail';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tour', component: Tours },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'destinations', component: Destinations },
  { path: 'destination/:id', component: DestinationDetails },
  { path: 'listing', component: Listing},

  { path: 'contact', component: Contact},
  { path: 'trip/:id', component: TripDetail},




  { path: '**', redirectTo: '' }
];
