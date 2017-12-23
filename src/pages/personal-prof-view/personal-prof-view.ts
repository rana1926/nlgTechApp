import { Component, ViewChild } from '@angular/core';
import { NavController,Nav, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AboutPage } from'../about/about'
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { UpdateProfilePage } from '../update-profile/update-profile';

@Component({
  selector: 'page-personal-prof-view',
  templateUrl: 'personal-prof-view.html',
})

export class PersonalProfViewPage {
  userEmail;
  userInfo;
  userName;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    public fireDB:AngularFireDatabase) {
  }
  
  ionViewDidLoad() {
    this.userEmail = this._authProvider.getUserAuth().email;
    this.fireDB.list('/users').valueChanges().subscribe(data => {
      this.userInfo = data.filter(user =>
        user['email'] === this.userEmail)[0];
      if(this.userInfo!==[]) {
        this.userName = this.userInfo.firstName + ' ' + this.userInfo.lastName;
      }
    });
  }

  editProfile(){
    // console.log(this.userInfo);
    this.navCtrl.push(UpdateProfilePage, {user: this.userInfo});
  }
}
