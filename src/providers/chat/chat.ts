import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Events } from 'ionic-angular';

@Injectable()
export class ChatProvider {
	firechats = firebase.database().ref('/chats');
	friend: any;
	friendmessages = [];
	constructor(public events: Events) {

	}

	initializeChat(friend) {
		this.friend = friend;
	}	

	addnewmessage(msg) {
	    if(this.friend) {
	    	return this.firechats.child(firebase.auth().currentUser.uid).child(this.friend.uid).push({
				sentby: firebase.auth().currentUser.uid,
				message: msg,
				timestamp: firebase.database.ServerValue.TIMESTAMP
	        }).then(() => {
				this.firechats.child(this.friend.uid).child(firebase.auth().currentUser.uid).push({
					sentby: firebase.auth().currentUser.uid,
					message: msg,
					timestamp: firebase.database.ServerValue.TIMESTAMP
				})
	        })

	    }
  	}

	getmessages() {
	    let temp;
	    this.firechats.child(firebase.auth().currentUser.uid).child(this.friend.uid).on('value', (snapshot) => {
	      this.friendmessages = [];
	      temp = snapshot.val();
	      for (var tempkey in temp) {
	        this.friendmessages.push(temp[tempkey]);
	      }
	      this.events.publish('newmessage');
	    })
  	}
}