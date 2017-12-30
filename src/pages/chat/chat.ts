import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { ChatProvider } from '../../providers/chat/chat';
import { Subscription } from 'rxjs/Subscription';

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
    private _usersProvider: UsersProvider,
    public chatservice: ChatProvider) {
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

  initChat(person) {
    this.chatservice.initializeChat(person);
    this.navCtrl.push('UserchatPage');
  }
}
