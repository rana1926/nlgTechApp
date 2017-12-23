import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { AgendaPage } from '../agenda/agenda';

@Component({
  selector: 'page-reg-profile',
  templateUrl: 'reg-profile.html',
})

export class RegProfilePage {

  emptyFields: boolean = true;
  
  profile = {
    firstName: null,
    lastName: null,
    age: null,
    position: null,
    description: null,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public FirDB:AngularFireDatabase,
    private _authProvider: AuthProvider) {
  }

  checkFields() {
    if(
      this.profile.firstName !== null &&
      this.profile.lastName !== null &&
      this.profile.age !== null &&
      this.profile.position !== null &&
      this.profile.description !== null) {
        this.emptyFields = false;
    }
  }

  editProfileInfo() {
    let uid = this._authProvider.getUserAuth().uid;
    let email = this._authProvider.getUserAuth().email;
    this.profile['uid'] = uid;
    this.profile['email'] = email;
    this.FirDB.database.ref('users/'+uid).set(this.profile).then(() => this.navCtrl.setRoot(AgendaPage)).catch( err => console.error(err));
  }
}
