import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
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
    console.log('ionViewDidLoad SigninPage');
  }
  
  signin(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.name, this.password).then(response => this.uid = response.uid).catch(function(error) {
      console.log('Hi')
    });
  }
}
