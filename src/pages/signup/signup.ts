import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from '../../providers/auth/auth';
import { RegProfilePage } from '../reg-profile/reg-profile';
import { PincodeController } from 'ionic2-pincode-input/dist/pincode';
import { AgendaPage } from '../agenda/agenda';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  email;
  password;
  code;
  constructor(
    private navCtrl: NavController,
    private fireDB: AngularFireDatabase,
    private authProvider: AuthProvider,
    public pincodeCtrl: PincodeController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
  }

  goToSignin() {
    this.navCtrl.push(SigninPage, {hasPinCode: true})
  }

  signup() {
    this.authProvider.registerUser(this.email, this.password).then(() => this.navCtrl.setRoot(RegProfilePage)).catch(err => {
      this.toastCtrl.create({
        message: err.message,
        duration: 6000
      }).present();
    });
  }

}
