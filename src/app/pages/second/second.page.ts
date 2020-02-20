import { Component, OnInit } from '@angular/core';
import { StorageConfigToken, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { stringify } from 'querystring';
import { R3TargetBinder } from '@angular/compiler';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(public storage: Storage, public popoverController: PopoverController, public nav: NavController ) { }
infoArray = [];
matchArray: string;
initLine: string ;
wheel = '0';
stage: string ;
pickUp = 0;
scoreIn = 0;
scoreOut = 0;
scoreLow = 0 ;
trench = 0;
public numArray = [];
public timeLeft = 0;
public timeDisplay = 0.00;
public isButtonVisible = false;
interval;
climbS: string;
fillClimb = 'outline';
climbStat = 0;
public matchDataArray = [];
ngOnInit() {}
  ionViewDidEnter() {
    const matchArray = ['name', 'teamNum', 'alliance', 'matchType', 'matchNum', 'win'];
    for (let i = 0; i < matchArray.length; i++) {
      this.storage.get(matchArray[i]).then((val) => {
        // console.log(val);
        this.infoArray.push(val);
      });
      }
    this.numArray.push(this.infoArray);
    this.matchDataArray.push(this.infoArray);
    console.log(this.numArray);
    this.timeLeft = 0.00;
    this.interval = setInterval(() => {
      if (this.timeLeft < 1500) {
        this.timeLeft++;
        this.timeDisplay = this.timeLeft / 10.00;
      } else if (this.timeLeft === 1500) {
        this.submit();
        this.isButtonVisible = true ;
        // this.nav.navigateForward('/third');

      }
    }, 100);
    this.storage.remove('matchData');
    }
  climb() {
    const climbArray = [this.timeDisplay.toString(), 'c', this.climbS];
    this.matchDataArray.push(climbArray);
    console.log(this.matchDataArray);

    }
  crossedInit() {
    this.initLine = 'true' ;
    const initArray = [this.timeDisplay.toString(), '1', this.initLine];
    this.matchDataArray.push(initArray);
    console.log(this.matchDataArray);

  }
  wheelSpin() {
    this.wheel = '1' ;
    const wheelArray = [this.timeDisplay.toString(), 'w', this.wheel];
    this.matchDataArray.push(wheelArray);
    console.log(this.matchDataArray);
  }
  stageInt() {
    const stageArray = [this.timeDisplay.toString(), 'ss', this.stage];
    this.matchDataArray.push(stageArray);
    console.log(this.matchDataArray);
  }
  ballPickUp() {
    this.pickUp ++ ;
    const ballArray = [this.timeDisplay.toString(), 'pu', '1'];
    this.matchDataArray.push(ballArray);
    console.log(this.matchDataArray);
  }
  innerScore() {
    const iscoreArray = [this.timeDisplay.toString(), 's', 'i'];
    this.matchDataArray.push(iscoreArray);
    console.log(this.matchDataArray);
  }
  outerScore() {
    const oscoreArray = [this.timeDisplay.toString(), 's', 'o'];
    this.matchDataArray.push(oscoreArray);
    console.log(this.matchDataArray);
  }
  lowerScore() {
    const lscoreArray = [this.timeDisplay.toString(), 's', 'l'];
    this.matchDataArray.push(lscoreArray);
    console.log(this.matchDataArray);
  }
  outerInnerFail() {
    const oiFailArray = [this.timeDisplay.toString(), 'f', 'o'];
    this.matchDataArray.push(oiFailArray);
    console.log(this.matchDataArray);
  }
  lowerFail() {
    const lFailArray = [this.timeDisplay.toString(), 'f', 'l'];
    this.matchDataArray.push(lFailArray);
    console.log(this.matchDataArray);
  }
  ballDropped() {
    const dropArray = [this.timeDisplay.toString(), 'pu', 'f'];
    this.matchDataArray.push(dropArray);
    console.log(this.matchDataArray);
  }
  trenchRun() {
    this.trench ++ ;
    const trenchArray = [this.timeDisplay.toString(), 'tr', this.trench.toString()];
    this.matchDataArray.push(trenchArray);
    console.log(this.matchDataArray);
  }
   async presentPopover(ev: any) {
    this.matchDataArray.push([this.timeDisplay.toString(), 'd', 'st']);
    console.log(this.matchDataArray);
    const popover = await this.popoverController.create({
      component: PopoverComponent, event: ev, cssClass: 'custom-popover', backdropDismiss: false
    });
    popover.onDidDismiss().then(() => {
      const dArray = [this.timeDisplay.toString(), 'd', 'en'];
      this.matchDataArray.push(dArray);
      console.log(this.matchDataArray);
    });
    return await popover.present();


  }
  attemptClimb() {
    this.fillClimb = 'solid';
    this.matchDataArray.push([this.timeDisplay.toString(), 'c', 'st']);
    console.log(this.matchDataArray);
  }
  submit() {
    this.storage.set('matchData', this.matchDataArray);
  }
}
