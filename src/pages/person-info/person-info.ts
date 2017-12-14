import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {  
  person;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
  }

}
