import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from "../pages/signup/signup";
import { SigninPage } from "../pages/signin/signin";
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AuthData } from '../providers/auth-data/auth-data';


var config = {
  apiKey: "AIzaSyAkMIOVzxLuqJJPdTBElXqjaTVVhIU6BGE",
  authDomain: "nlgtechapp.firebaseapp.com",
  databaseURL: "https://nlgtechapp.firebaseio.com",
  projectId: "nlgtechapp",
  storageBucket: "nlgtechapp.appspot.com",
  messagingSenderId: "720892634155"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData
  ]
})
export class AppModule {}
