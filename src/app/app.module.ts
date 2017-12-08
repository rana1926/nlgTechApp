import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pro } from '@ionic/pro';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { AttendeesPage } from '../pages/attendees/attendees';
import { UsersProvider } from '../providers/users/users';
import { PersonInfoPage } from '../pages/person-info/person-info';

const IonicPro = Pro.init('ac56531e', {
  appVersion: "0.0.1"
});

var firebaseConfig = {
  apiKey: "AIzaSyBp9MJ8dQnen3MIl9n-U8z35xSkaqr3xHQ",
  authDomain: "nlg-dev.firebaseapp.com",
  databaseURL: "https://nlg-dev.firebaseio.com",
  projectId: "nlg-dev",
  storageBucket: "nlg-dev.appspot.com",
  messagingSenderId: "736492675148"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ProfilePage,
    AttendeesPage,
    PersonInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ProfilePage,
    AttendeesPage,
    PersonInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireDatabase,
    UsersProvider
  ]
})
export class AppModule {}
