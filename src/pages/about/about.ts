import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  items;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.fireDB.list('/about').valueChanges().subscribe(res => this.items = res);
  }
}
