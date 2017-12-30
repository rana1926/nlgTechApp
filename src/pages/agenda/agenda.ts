import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
    
  items
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fireDB:AngularFireDatabase,
              private _authProvider: AuthProvider,
            ) {
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
    this.fireDB.list('/agenda').valueChanges().subscribe(res => {
      this.items = res;
    });
    
     
    // Console.log(itemsRef);
  }
}
