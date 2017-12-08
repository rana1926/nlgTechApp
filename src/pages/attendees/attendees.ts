import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/users/users';
import { Subscription } from 'rxjs/Subscription';
import { PersonInfoPage } from '../person-info/person-info';

@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html',
})
export class AttendeesPage {

  private usersObservable: Subscription;
  users = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private _usersProvider: UsersProvider) {
      this.getUsers();
  }

  getUsers() {
    this.usersObservable = this. _usersProvider.getAttendees().subscribe(users => {
      this.users = users;
   });
  }

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, {person: person});
  }
  
  signout() {
    this._authProvider.signout().then(() => this.navCtrl.setRoot(LoginPage)).catch(console.error);
  }
  
  ionViewWillLeave() {
    if(!!this.usersObservable) {
      this.usersObservable.unsubscribe();
    }
    
  }
}
