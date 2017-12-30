import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReportUserPage } from '../report-user/report-user';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {
  person;
  obj;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.person = this.navParams.get('person');
  }
  goToReportpage(){
    this.obj={ReportUser:this.person};
    console.log(this.obj)
    this.navCtrl.push(ReportUserPage, this.obj);

  }
}