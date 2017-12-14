import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import {MapPage} from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { AttendeesPage } from '../pages/attendees/attendees';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 rootPage:any = HomePage;
//rootPage:any = SignupPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              angularFireAuth: AngularFireAuth, 
              // public loadingCtrl: LoadingController,
              public menu: MenuController ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 
  map(){
    this.menu.close();
    this.nav.push(MapPage);
  }

  agenda(){
    this.menu.close();
    this.nav.push(AgendaPage);
  }

  about(){
    this.menu.close();
    this.nav.push(AboutPage);
  }
  
  speakers(){
    this.menu.close();
    this.nav.push(SpeakersPage);
  }

  sponsor(){
    this.menu.close();
    this.nav.push(SponsorPage);
  }
}

