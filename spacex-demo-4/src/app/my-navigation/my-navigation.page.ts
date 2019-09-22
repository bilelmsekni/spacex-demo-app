import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-my-navigation',
  templateUrl: './my-navigation.page.html',
  styleUrls: ['./my-navigation.page.scss'],
})
export class MyNavigationPage implements OnInit {

  location: Geoposition;

  constructor(private geolocation: Geolocation, private platform: Platform) { }

  ngOnInit() {
  }

  locate(): void {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition({ timeout: 1000, enableHighAccuracy: false }).then((resp) => {
        this.location = resp;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });

  }

}
