import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class UsersProvider {

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _authProvider: AuthProvider) {
  }
  
  getAttendees() {
    return this._angularFireDatabase.list('users').valueChanges();
  }

  // getUsername(email) {
  //   let user;
  //   this._angularFireDatabase.list('/users').valueChanges().subscribe( data => {
  //     user = data.filter(user => user.email === email)[0];
  //     return user.firstName + ' ' + user.lastName;
  //   })
  // }

  updateUserInfo(user) {
    let uid = this._authProvider.getUserAuth().uid;
    return this._angularFireDatabase.database.ref('users/' + uid).update(user);
  }
}
