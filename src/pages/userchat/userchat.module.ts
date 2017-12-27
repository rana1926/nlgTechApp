import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserchatPage } from './userchat';

@NgModule({
  declarations: [
    UserchatPage,
  ],
  imports: [
    IonicPageModule.forChild(UserchatPage),
  ],
  exports: [
    UserchatPage
  ]
})
export class UserchatPageModule {}

