import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SpeakersInfoPage } from '../speakers-info/speakers-info'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})

export class SpeakersPage {
  
  private speakersObservable: Subscription;
  speakerList;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.speakersObservable = this.fireDB.list('/speakers').valueChanges().subscribe(res =>
      this.speakerList = res);
  }

  goToSpeakerInfo(speaker) {
    this.navCtrl.push(SpeakersInfoPage, { spekerInfo: speaker });
    console.log(speaker)
  }

  ionViewWillLeave() {
    if(!!this.speakersObservable) {
      this.speakersObservable.unsubscribe();
    }
  }
}
