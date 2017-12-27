import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExhibitorsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exhibitors-info',
  templateUrl: 'exhibitors-info.html',
})
export class ExhibitorsInfoPage {
  info;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsInfoPage');
    this.info = this.navParams.get('exhibitorInfo')
    console.log(this.info)
  }

}
