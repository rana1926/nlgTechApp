import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfilePage } from '../profile/profile';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  email;
  password;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider) {
  }

  login() {
    this._authProvider.login(this.email, this.password).then( () => {
      this.navCtrl.setRoot(AttendeesPage);
    }).catch(console.error);
  }

}
