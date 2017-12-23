import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }
}
