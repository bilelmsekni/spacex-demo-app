import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-my-vibrator',
  templateUrl: './my-vibrator.page.html',
  styleUrls: ['./my-vibrator.page.scss'],
})
export class MyVibratorPage implements OnInit {

  constructor(private vibration: Vibration) { }

  ngOnInit() {
  }

  vibrate(): void {
    // Vibrate the device for a second
    // Duration is ignored on iOS.
    // this.vibration.vibrate(1000);

    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    this.vibration.vibrate([2000, 1000, 2000]);

    // Stop any current vibrations immediately
    // Works on Android and Windows only
    // this.vibration.vibrate(0);
  }

}
