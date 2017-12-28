import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the AuthDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthData {
  public fireAuth: any;
  constructor() {
    this.fireAuth = firebase.auth();
  }
 
  resetPassword(email: string): Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }
}

