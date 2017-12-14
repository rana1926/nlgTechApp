import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersProvider {

  constructor(
    private _angularFireDatabase: AngularFireDatabase) {
    }
  
  getAttendees() {
    return this._angularFireDatabase.list('users').valueChanges();
  }
}
