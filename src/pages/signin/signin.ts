import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  name
  password
  uid
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB:AngularFireDatabase){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  
  signin(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.name, this.password).then(response => this.uid = response.uid).catch(function(error) {
      console.log('Hi')
    });
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }


}
