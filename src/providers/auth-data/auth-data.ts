import { Injectable } from '@angular/core';
import firebase from 'firebase';

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

