import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})

export class AgendaPage {
  items
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fireDB: AngularFireDatabase,
    private _authProvider: AuthProvider,
    private menu: MenuController
  ) { }

  ionViewDidLoad() {
    this.menu.enable(true, "menu");
    this.fireDB.list('/agenda').valueChanges().subscribe(res => {
      this.items = res;
    });
  }
}
