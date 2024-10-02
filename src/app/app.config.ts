import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"arte-y-color","appId":"1:613464503560:web:2951ebaa047b107fdee8bd","storageBucket":"arte-y-color.appspot.com","apiKey":"AIzaSyAo4wgMtfuwQb21n9eTHRTUV-pXuxhQ224","authDomain":"arte-y-color.firebaseapp.com","messagingSenderId":"613464503560","measurementId":"G-KLYHTRLXPQ"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"arte-y-color","appId":"1:613464503560:web:fa80600bf3fff492dee8bd","storageBucket":"arte-y-color.appspot.com","apiKey":"AIzaSyAo4wgMtfuwQb21n9eTHRTUV-pXuxhQ224","authDomain":"arte-y-color.firebaseapp.com","messagingSenderId":"613464503560","measurementId":"G-NGHZZ7SMKG"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"arte-y-color","appId":"1:613464503560:web:fe11938dd7c33c83dee8bd","storageBucket":"arte-y-color.appspot.com","apiKey":"AIzaSyAo4wgMtfuwQb21n9eTHRTUV-pXuxhQ224","authDomain":"arte-y-color.firebaseapp.com","messagingSenderId":"613464503560","measurementId":"G-D43EDGR3N8"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"arte-y-color","appId":"1:613464503560:web:1b138f9ac649a5eadee8bd","storageBucket":"arte-y-color.appspot.com","apiKey":"AIzaSyAo4wgMtfuwQb21n9eTHRTUV-pXuxhQ224","authDomain":"arte-y-color.firebaseapp.com","messagingSenderId":"613464503560","measurementId":"G-BW4NS50W6C"})), provideFirestore(() => getFirestore())]
};
