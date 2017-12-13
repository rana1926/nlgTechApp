import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import { firestore } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfilePage } from '../profile/profile';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  name
  password
  uid
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public angularFireAuth: AngularFireAuth, 
    public fireDB:AngularFireDatabase
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.name, this.password).then(response => {this.fireDB.database.ref('users/' + response.uid).set(response.uid)
       }).catch(function(error) {
      console.log(error)
    });
  }

  goToSignin(){
    this.navCtrl.push(SigninPage)

  }

}
