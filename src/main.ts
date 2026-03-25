import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';
import emailjs from '@emailjs/browser'; // 1. Import the library

// 2. Initialize with your Public Key from the EmailJS Account tab
emailjs.init("HIwtp1miJk5YWZhyc");

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

register();
