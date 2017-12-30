import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CamProvider } from '../../providers/cam/cam';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {
  person;
  picURL;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _camProvider: CamProvider) {
      this.person = this.navParams.get('person');
      this._camProvider.getPicture(this.person.uid).then(res =>
      this.picURL = res);
  }
}
