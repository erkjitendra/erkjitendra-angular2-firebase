import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.servic';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDFKrFVN8UyngONHCmaQnPvROruCe2fKxI",
    authDomain: "sixthpro-79190.firebaseapp.com",
    databaseURL: "https://sixthpro-79190.firebaseio.com",
    storageBucket: "sixthpro-79190.appspot.com",
    messagingSenderId: "279404556117"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
