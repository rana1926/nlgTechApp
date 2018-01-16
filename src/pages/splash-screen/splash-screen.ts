import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PinCodePage } from '../pin-code/pin-code';

@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    var that = this;
    setTimeout(function(){ 
      that.navCtrl.push(PinCodePage);
     }, 3000);
    
  }

}
