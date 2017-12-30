import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'page-report-user',
  templateUrl: 'report-user.html',
})
export class ReportUserPage {
  ReportUser;
  CarantUserEmail;
  CarantUserUid;
  msg;
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public authProvider:AuthProvider,
              public firDb:AngularFireDatabase) {
         this.ReportUser = this.navParams.get('ReportUser');
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportUserPage');
    console.log(this.ReportUser,"ddddddddddddddddd")
    this.CarantUserEmail = this.authProvider.getUserAuth().email;
    this.CarantUserUid = this.authProvider.getUserAuth().uid
    console.log(this.CarantUserEmail,this.CarantUserUid )

    
  }
  
  sendMsg(){
    let reportObj={
      sender: this.CarantUserUid,
      reported:this.ReportUser.uid,
      msgte:this.msg
    }
    console.log(reportObj)
    this.firDb.database.ref('reports').push(reportObj);
    
  }
}
