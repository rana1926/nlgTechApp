import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import { firestore } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';
import { RegProfilePage } from '../reg-profile/reg-profile';
import { AgendaPage } from '../agenda/agenda';
import { PincodeController } from  'ionic2-pincode-input/dist/pincode';

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
    private navParams: NavParams, 
    private angularFireAuth: AngularFireAuth, 
    private fireDB:AngularFireDatabase,
    private authProvider:AuthProvider,
    public pincodeCtrl: PincodeController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController    
  ) {
    this.email = 'duha@gmail.com'
    this.password = '11111111';   
    
  }

  // signup() {  
  //   this.authProvider.registerUser(this.email, this.password)
  //   .then(() => this.navCtrl.setRoot(ProfilePage)).catch(function(error) {
  //     console.error(error)
  //   });
  // }

  goToSignin() {
    this.navCtrl.push(SigninPage)
  }
   
  ionViewDidLoad() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.navCtrl.setRoot(RegProfilePage);       
      }
    })     
  }

  openPinCode(){
    
    let pinCode =  this.pincodeCtrl.create({
      title:'Pincode'
    });
    
    pinCode.present();
    
    pinCode.onDidDismiss( (code,status) => {
        
      if (status === 'done') {
        let user = firebase.database().ref('codes').once('value', (_snapshot: any) => {
            console.log(_snapshot.val());
          //   if (_snapshot.hasChild(String(code))) {
          //    console.log('yesss')
          // }
          var flag = false
          for (var i = 0; i < _snapshot.val().length; i++) {
            if (_snapshot.val()[i].value === code && _snapshot.val()[i].is_active === true) {
              flag = true;
              let ref = this.fireDB.database.ref('codes/' + i).update({is_active: false});
            } 
          }
          if(flag){
            this.authProvider.registerUser(this.email, this.password)
              .then(() => this.navCtrl.setRoot(RegProfilePage)).catch(err => {
                this.toastCtrl.create({
                  message: err.message,
                  duration: 6000
                }).present();
              });
          }else{
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Invalid code please try it again!',
              buttons: ['OK']
            });
            alert.present();
          }
        })
      }
    })
    
  }

}
