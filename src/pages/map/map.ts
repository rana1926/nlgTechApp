import { Component , ViewChild ,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import {Platform} from 'ionic-angular';
 import { IonicPage } from 'ionic-angular';
 
 
declare var google;
@Component({
 selector: 'page-map',
 templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  options : GeolocationOptions;
  currentPos : Geoposition;
  // rest;

 

  constructor(public navCtrl: NavController, 
    private geolocation : Geolocation, 
    private googleMaps: GoogleMaps, 
    private platform: Platform, 
    public navParams: NavParams) {
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

   loadMap() {
     this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 19,
      center: {lat:31.9443466, lng:35.9212269},
    });

    var marker = new google.maps.Marker({
      position: {lat:31.9443466, lng:35.9212269},
      map: this.map,
      title: "titel"
    });
  }
}
