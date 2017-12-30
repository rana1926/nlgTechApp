import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReportUserPage } from '../report-user/report-user';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {
  person;
  obj;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar
    ) {
      this.person = this.navParams.get('person');
  }
  goToReportpage(){
    this.obj={ReportUser:this.person};
    console.log(this.obj)
    this.navCtrl.push(ReportUserPage, this.obj);

  }
  goToCalender(){
    this.calendar.openCalendar(new Date()).then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
    );
  }

}