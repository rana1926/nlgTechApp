import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Nav } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import  { ExhibitorsInfoPage } from '../exhibitors-info/exhibitors-info';

@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {
  exhibitors;
  exhibitor
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fireDB:AngularFireDatabase,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsPage');

    this.fireDB.list('/exhibitor').valueChanges().subscribe(res => {
      this.exhibitors = res;
      console.log(this.exhibitors)
    });
  }

  goToInfo(exhibitor){
    this.navCtrl.push(ExhibitorsInfoPage,{exhibitorInfo:exhibitor});
  }
   
}
