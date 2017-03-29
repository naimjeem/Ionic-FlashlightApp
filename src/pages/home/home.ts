import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Used to determine whether the flashlight is currently on or off.
  isOn: boolean = false;
 
  constructor(private flashlight: Flashlight) {
 
  }
 
  /**
   * Return a boolean based on whether the flashlight is available for use
   */
  async isAvailable(): Promise<boolean> {
    try {
      return await this.flashlight.available();
    }
    catch (e) {
      console.log(e);
    }
  }
  
  /**
   * Toggles the flashlight between an on and off state. 
   * A variable is used to determine whether the flashlight is available.
   *  If it is available:
   *   Toggle the flashlight
   *   Toggle the 'isOn' variable that updates our view color/icon.
   *  If it isn't available:
   *   Log out to the console.
   */
  async toggleFlash(): Promise<void> {
    try {
      let available = await this.isAvailable();
      if (available) {
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }
      else {
        console.log("Not available.");
      }
    }
    catch (e) {
      console.log(e);
    }
  }
}
