import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ChatProvider } from '../../providers/chat/chat';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})

export class AgendaPage {
  items
  day1Observable;
  day2Observable;
  day1List;
  day2List;
  day1 = "day1";
  day2 = "day2";
  day = this.day1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fireDB: AngularFireDatabase,
    private menu: MenuController,
    public _chatProvider: ChatProvider
  ) { }

  ionViewDidLoad() {
    this.menu.enable(true, "menu");
    this.day1Observable = this.fireDB.list('/agenda/day1').valueChanges();
    this.day2Observable = this.fireDB.list('/agenda/day2').valueChanges();
    this.day1Observable.subscribe(res => this.day1List = res);
    this.day2Observable.subscribe(res => this.day2List = res);
    this.fireDB.list('/agenda').valueChanges().subscribe(res => {
      this.items = res;
    });

    this._chatProvider.alertNewMessages();
  }
}
