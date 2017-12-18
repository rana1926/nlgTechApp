import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';
import { PersonInfoPage } from '../person-info/person-info';


@Component({
 selector: 'page-chat',
 templateUrl: 'chat.html',
})
export class ChatPage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private _usersProvider: UsersProvider) {
    this.getUsers();  
  }
  getUsers(){
    this.usersObservable = this. _usersProvider.getAttendees().subscribe(users => {
      this.users = users;
    });
  }

  

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, {person: person});
  }
  ionViewDidLoad() {
    console.log(this.users);
  }
}
