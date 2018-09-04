import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Popover } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireDatabase , AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { PopoverPage } from '../pages/popover/popover';


var config = {
  apiKey: "AIzaSyDYcyoa621c3o8XXMKJq8bASnRE1iMhWI0",
  authDomain: "geotracker-np.firebaseapp.com",
  databaseURL: "https://geotracker-np.firebaseio.com",
  projectId: "geotracker-np",
  storageBucket: "geotracker-np.appspot.com",
  messagingSenderId: "146377587988"
};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
