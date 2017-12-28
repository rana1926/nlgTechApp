import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';
import { AgendaPage } from '../agenda/agenda';
import { PersonalProfViewPage } from '../personal-prof-view/personal-prof-view';
import { SignupPage } from '../signup/signup';
import { RegProfilePage } from '../reg-profile/reg-profile';
import { UpdateProfilePage } from '../update-profile/update-profile';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  email;
  password;
  uid;
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB:AngularFireDatabase,
    private toastCtrl: ToastController,
    public authProvider:AuthProvider){
      this.email = 'duhaali@gmail.com';
      this.password = '11111111';
  }
  
  signin() {
    this.authProvider.login(this.email, this.password).then(() => this.navCtrl.setRoot(AgendaPage)).catch(err => {
      this.toastCtrl.create({
        message: err.message,
        duration: 6000
      }).present();
    });
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }

}
