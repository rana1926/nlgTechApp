import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import { firestore } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';
import { RegProfilePage } from '../reg-profile/reg-profile';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  email;
  password;
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private angularFireAuth: AngularFireAuth, 
    private fireDB:AngularFireDatabase,
    private authProvider:AuthProvider
  ) {
    this.email = '@s.com'
    this.password = '00000000';    
  }

  signup() {
    this.authProvider.registerUser(this.email, this.password)
    .then(() => {
      this.navCtrl.setRoot(RegProfilePage);
    }).catch(console.error);
  }

  goToSignin() {
    this.navCtrl.push(SigninPage)
  }

}
