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
        this.numArray.push(val);
        this.matchDataArray.push(val);
        // console.log(val);
      });
      }
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
    this.matchDataArray.push(this.timeDisplay.toString(), 'c', this.climbS);
    console.log(this.matchDataArray);

    }
  crossedInit() {
    this.initLine = 'true' ;
    this.matchDataArray.push(this.timeDisplay.toString(), '1', this.initLine);
    console.log(this.matchDataArray);

  }
  wheelSpin() {
    this.wheel = '1' ;
    this.matchDataArray.push(this.timeDisplay.toString(), 'w', this.wheel);
    console.log(this.matchDataArray);
  }
  stageInt() {
    this.matchDataArray.push(this.timeDisplay.toString(), 'ss', this.stage);
    console.log(this.matchDataArray);
  }
  ballPickUp() {
    this.pickUp ++ ;
    this.matchDataArray.push(this.timeDisplay.toString(), 'pu', '1');
    console.log(this.matchDataArray);
  }
  innerScore() {
    this.matchDataArray.push(this.timeDisplay.toString(), 's', 'i');
    console.log(this.matchDataArray);
  }
  outerScore() {
    this.matchDataArray.push(this.timeDisplay.toString(), 's', 'o');
    console.log(this.matchDataArray);
  }
  lowerScore() {
    this.matchDataArray.push(this.timeDisplay.toString(), 's', 'l');
    console.log(this.matchDataArray);
  }
  outerInnerFail() {
    this.matchDataArray.push(this.timeDisplay.toString(), 'f', 'o');
    console.log(this.matchDataArray);
  }
  lowerFail() {
    this.matchDataArray.push(this.timeDisplay.toString(), 'f', 'l');
    console.log(this.matchDataArray);
  }
  ballDropped() {
    this.matchDataArray.push(this.timeDisplay.toString(), 'pu', 'f');
    console.log(this.matchDataArray);
  }
  trenchRun() {
    this.trench ++ ;
    this.matchDataArray.push(this.timeDisplay.toString(), 'tr', this.trench.toString());
    console.log(this.matchDataArray);
  }
   async presentPopover(ev: any) {
    this.matchDataArray.push(this.timeDisplay.toString(), 'd', 'st');
    console.log(this.matchDataArray);
    const matchDataArrayP = this.matchDataArray;
    const popover = await this.popoverController.create({
      component: PopoverComponent, event: ev, cssClass: 'custom-popover', backdropDismiss: false
    });
    popover.onDidDismiss().then(() => {
        this.matchDataArray.push(this.timeDisplay.toString(), 'd', 'en');
        console.log(this.matchDataArray);
    });
    return await popover.present();


  }
  attemptClimb() {
    this.fillClimb = 'solid';
    this.matchDataArray.push(this.timeDisplay.toString(), 'c', 'st');
    console.log(this.matchDataArray);
  }
  submit() {
    this.storage.set('matchData', this.matchDataArray);
  }
}
