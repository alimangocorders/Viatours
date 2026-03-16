import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  Navbar } from './layout/navbar/navbar';
import {  Hero } from './components/hero/hero';
import {  WhyUs } from './components/why-us/why-us';
import {  Trending } from './components/trending/trending';
import {  PopularThings } from './components/popular-things/popular-things';
import {  FeatureTrip } from './components/feature-trip/feature-trip';
import {  ExploreTour } from './components/explore-tour/explore-tour';
import {  Reviews } from './components/reviews/reviews';
import {  Articles } from './components/articles/articles';
import {  SpecialOffer } from './components/special-offer/special-offer';
import {  Partners } from './components/partners/partners';
import {  Callaction } from './components/callaction/callaction';
import {  Footer } from './layout/footer/footer';







@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
