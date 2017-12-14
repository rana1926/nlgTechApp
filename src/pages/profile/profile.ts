import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider) {
  }

  updateProfile() {
    let uid = this._authProvider.getUserAuth().uid;
    this._authProvider.updateUserInfo(this.profile, uid)
      .then(() => this.navCtrl.setRoot(AttendeesPage))
      .catch(console.error);
  }
  
}
