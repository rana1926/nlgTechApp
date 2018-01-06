import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { CamProvider } from '../../providers/cam/cam';

@Component({
  selector: 'page-personal-prof-view',
  templateUrl: 'personal-prof-view.html',
})

export class PersonalProfViewPage {
  userEmail;
  userInfo;
  userName;
  profilePicURL;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    public fireDB: AngularFireDatabase,
    public _camProvider: CamProvider) {
  }

  ionViewDidLoad() {
    this.userEmail = this._authProvider.getUserAuth().email;
    this.fireDB.list('/users').valueChanges().subscribe(data => {
      this.userInfo = data.filter(user =>
        user['email'] === this.userEmail)[0];
      if (this.userInfo !== []) {
        this.userName = this.userInfo.firstName + ' ' + this.userInfo.lastName;
      }
    });
    this._camProvider.getPicture(null).then(res => this.profilePicURL = res);
  }

  editProfile() {
    this.navCtrl.push(UpdateProfilePage, { user: this.userInfo });
  }
}
