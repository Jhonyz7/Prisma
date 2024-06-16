import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home/home.module';
import { GoogleBooksService } from './services/google-books.services';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"prisma-6780b","appId":"1:924073151820:web:360e68b00351dcbfc713e9","storageBucket":"prisma-6780b.appspot.com","apiKey":"AIzaSyCgZ8Gtpl_lzzrKJuLRHWnKNYUd6xPWNGw","authDomain":"prisma-6780b.firebaseapp.com","messagingSenderId":"924073151820"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}