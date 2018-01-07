import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakersInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-speakers-info',
  templateUrl: 'speakers-info.html',
})
export class SpeakersInfoPage {
  SpInfo
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersInfoPage');
    this.SpInfo = this.navParams.get('spekerInfo')
    console.log(this.SpInfo)
  }

}
