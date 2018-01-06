import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})

export class SpeakersPage {
  speakerList;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.fireDB.list('/speakers').valueChanges().subscribe(res =>
      this.speakerList = res);
  }

  goToSpeakerInfo(speaker) {
    
  }
}
