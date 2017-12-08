import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { firestore } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  email;
  password;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider) {
  }

  register() {
    this._authProvider.registerUser(this.email, this.password).then((res) => {
      this.navCtrl.setRoot(ProfilePage);
    }).catch(console.error);
  }

  ionViewDidLoad() {
    if(!!this._authProvider.getUserAuth()) {
      this.navCtrl.setRoot(AttendeesPage);
    }
    
  }

  navToSignin() {
    this.navCtrl.push(LoginPage);
  }

}
