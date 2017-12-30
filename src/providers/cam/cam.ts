import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class CamProvider {
  picture = '';
  constructor(
    public cam: Camera,
    public _authProvider: AuthProvider
  ) {
  }

  async takePhoto(src) {

    const camOptions:CameraOptions = {
      quality: 30,
      targetHeight: 500,
      targetWidth: 500,
      destinationType:  this.cam.DestinationType.DATA_URL,
      encodingType: this.cam.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      sourceType: this.cam.PictureSourceType[src],
      mediaType: this.cam.MediaType.PICTURE,
      correctOrientation: true,
      cameraDirection: this.cam.Direction.FRONT
    }

    const res = await this.cam.getPicture(camOptions);
    this.picture = `data:image/jpeg;base64,${res}`;
    return this.picture;
  }
  
  postPicture() {
    if(this.picture !== '') {
      let uid = this._authProvider.getUserAuth().uid;
      const pictures = storage().ref(`profilePictures/${uid}`);
      return pictures.putString(this.picture, 'data_url');
    }
    else {
      return console.error('No Picture was Taken or Chosen!');
    }
  }

  getPicture(uid) {
    uid = uid ? uid : this._authProvider.getUserAuth().uid;
    return storage().ref(`profilePictures/${uid}`).getDownloadURL().then(res => res).catch(console.error);
  }

}
