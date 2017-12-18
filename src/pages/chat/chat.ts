import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';
import { Subscription } from 'rxjs/Subscription';
import { PersonInfoPage } from '../person-info/person-info';


@Component({
 selector: 'page-chat',
 templateUrl: 'chat.html',
})
export class ChatPage {
  private usersObservable: Subscription;
  users = [];
  searchResults = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private _usersProvider: UsersProvider) {
    this.getUsers();  
  }
  getUsers(){
    this.usersObservable = this. _usersProvider.getAttendees().subscribe(users => {
      this.searchResults = this.users = users;
    });
  }
  findUsers(ev){
    var query = ev.target.value.toLowerCase();
    var keys = ['firstName', 'lastName'];
   
    if(query && query.trim() != ''){
      this.users = this.searchResults.filter((item) => {
        return keys.some( key => 
          String(item[key]).toLowerCase().includes(query));
      });
    }else{
      this.getUsers();
    }
  }

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, {person: person});
  }
  ionViewDidLoad() {
    console.log(this.users);
  }
}
