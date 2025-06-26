import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './app/environment';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ]
});
