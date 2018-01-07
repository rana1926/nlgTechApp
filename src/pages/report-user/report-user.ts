import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-report-user',
  templateUrl: 'report-user.html',
})
export class ReportUserPage {
  ReportUser;
  CarantUserEmail;
  CarantUserUid;
  msg;
  email1;
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public authProvider:AuthProvider,
              public firDb:AngularFireDatabase,
              private emailComposer: EmailComposer,
              private toastCtrl: ToastController) {
         this.ReportUser = this.navParams.get('ReportUser');
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportUserPage');
    console.log(this.ReportUser,"ddddddddddddddddd")
    this.CarantUserEmail = this.authProvider.getUserAuth().email;
    this.CarantUserUid = this.authProvider.getUserAuth().uid
    console.log(this.CarantUserEmail,this.CarantUserUid )
      this.firDb.list('/reportEmail').valueChanges().subscribe(res => {
        this.email1 = res;
        console.log(this.email1[0])
      });

    
  }
  
  sendMsg(){
    let reportObj={
      sender: this.CarantUserEmail,
      reported: this.ReportUser.email,
      reportedUid: this.ReportUser.uid,
      msgte:this.msg
    }
    console.log(reportObj)
    this.firDb.database.ref('reports').push(reportObj);
  
    
let email = {
  to: this.email1[0],
  cc: this.email1[0],
  subject: 'report user',
  body: 'Hi , I will report user :' + reportObj.reported + 'His uid is : ' + reportObj.reportedUid ,
  isHtml: true
};

this.emailComposer.open(email);

let toast = this.toastCtrl.create({
  message: 'Thank You, This User Reported',
  duration: 5000,
  position: 'top'
});

toast.present();

    
  }
}
