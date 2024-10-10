import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes, withComponentInputBinding()),
      provideFirebaseApp(() =>
      initializeApp({"projectId":"arte-color-362b0",
        "appId":"1:769925213769:web:4066a9e292de8bee069998",
        "storageBucket":"arte-color-362b0.appspot.com",
        "apiKey":"AIzaSyCrYT8d6T9C16NRiq-YALYbE6D1cm-oU4I",
        "authDomain":"arte-color-362b0.firebaseapp.com",
        "messagingSenderId":"769925213769"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
};
