import { Component } from '@angular/core';
import {  Hero } from '../../components/hero/hero';
import {  WhyUs } from '../../components/why-us/why-us';
import {  Trending } from '../../components/trending/trending';
import {  PopularThings } from '../../components/popular-things/popular-things';
import {  FeatureTrip } from '../../components/feature-trip/feature-trip';
import {  ExploreTour } from '../../components/explore-tour/explore-tour';
import {  Reviews } from '../../components/reviews/reviews';
import {  Articles } from '../../components/articles/articles';
import {  SpecialOffer } from '../../components/special-offer/special-offer';
import {  Partners } from '../../components/partners/partners';
import {  Callaction } from '../../components/callaction/callaction';

@Component({
  selector: 'app-home',
  imports: [ Hero, WhyUs, Trending, PopularThings, FeatureTrip, ExploreTour, Reviews, Articles, SpecialOffer, Partners, Callaction],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
