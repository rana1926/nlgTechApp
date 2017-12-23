import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { CamProvider } from '../../providers/cam/cam';
import { UsersProvider } from '../../providers/users/users';
import { PersonalProfViewPage } from '../personal-prof-view/personal-prof-view';

@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})

export class UpdateProfilePage {
  user = {
    firstName: null,
    lastName: null,
    age: null,
    position: null,
    description: null
  };

  picURL;
  srcOption = '';
  showOptions = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheet: ActionSheetController,
    public _camProvider: CamProvider,
    public _usersProvider: UsersProvider
  ) {
  }

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    this._camProvider.getPicture().then(val => {
      this.picURL = val;
    }).catch(err => console.error(err));
  }

  selectSrc(event) {
    let actionSheet = this.actionSheet.create({
      buttons: [
        {
          text: 'Take a Photo',
          handler: () => {
            this._camProvider.takePhoto('CAMERA').then(res => this.picURL = res);
          }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this._camProvider.takePhoto('PHOTOLIBRARY').then(res => this.picURL = res);
          }
        },
      ]
    });
    actionSheet.present();
  }

  goToPage(saved) {
    if(saved === 'saved') {
      this._usersProvider.updateUserInfo(this.user);
      this._camProvider.postPicture();
      this.navCtrl.setRoot(PersonalProfViewPage);      
    } else {
      this.navCtrl.setRoot(PersonalProfViewPage);      
    }
  }
}
