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
 public infoArray = [];
public offArray = [];
matchArray: string;
public initLine = 'F' ;
wheel = '0';
stage: string ;
// all Auto properties
 pickUpA= 0;
  dropA= 0;
  scoreOA= 0;
  missOA = 0;
  scoreLA= 0;
  missLA =0;
// Teleop properties
pickUpT = 0;
dropT = 0;
scoreOT = 0;
missOT = 0;
scoreLT = 0;
missLT = 0;
trench = 0;
// cycleArray = [timeStampSt, balls picked up, timeStampEn, balls attempted to score]
cycleArray = [0, 0, 0, 0];
cycleDataArray = [];
// missArray = [Auto Outer Missed, TeleOp Outer Missed, Auto Lower Missed, TeleOp Lower Missed]
medAvgCycle = [0, 0];
missArray = [0, 0, 0, 0];
climbArray = [0, 0, 0];
defenseArray = [0, 0, 0, 0];
public numArray = [];
public timeLeft = 0.00;
public timeDisplay = 0.00;
public isButtonVisible = false;
interval;
climbS = '';
fillClimb = 'outline';
climbStat = 0;
public matchDataArray = [];
ngOnInit() {}
  ionViewWillEnter() {
    const matchArray = ['name', 'teamNum', 'alliance', 'matchType', 'matchNum', 'win'];
    for (let i = 0; i < matchArray.length; i++) {
      this.storage.get(matchArray[i]).then((val) => {
         console.log(val);
         this.infoArray.push(val);
      });
      }
    this.numArray.push(this.infoArray);
    this.matchDataArray.push(this.infoArray);
    console.log(this.numArray);
    this.timeLeft = 0;
    this.interval = setInterval(() => {
      if (this.timeLeft < 1500) {
        this.timeLeft++;
        this.timeDisplay = this.timeLeft / 10;

      } else if (this.timeLeft === 1500) {
        this.cycleTimeAvgMed();
        this.submit();
        this.isButtonVisible = true ;
        // this.nav.navigateForward('/third');

      }
    }, 100);
    this.storage.remove('matchData');
    }
     ionViewDidLeave() {
      this.compile();
      this.storage.set('official', this.offArray);
  }
  climb() {
    this.climbArray[1] = this.timeDisplay;
    this.climbArray[2] = this.climbArray[1] - this.climbArray[0];
    const climbArray = [this.timeDisplay.toString(), 'c', this.climbS];
    this.matchDataArray.push(climbArray);
    console.log(this.matchDataArray);

    }
  crossedInit() {
    this.initLine = 'T' ;
    const initArray = [this.timeDisplay.toString(), 'T', this.initLine];
    this.matchDataArray.push(initArray);
    this.storage.set('initLine', this.initLine);
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
    if (this.timeDisplay <= 15 ) {
      this.pickUpA ++ ;
    } else {
      this.cycleTimeSt();
      this.pickUpT ++ ;
    }
    // this.pickUpArray[2] ++ ;
    const ballArray = [this.timeDisplay.toString(), 'pu', '1'];
    this.matchDataArray.push(ballArray);
    console.log(this.matchDataArray);
  }
  // innerScore() {
   // const iscoreArray = [this.timeDisplay.toString(), 's', 'i'];
   // this.matchDataArray.push(iscoreArray);
    // console.log(this.matchDataArray);
  // }
  outerScore() {
    if (this.timeDisplay <= 15 ) {
      this.scoreOA ++ ;
    } else {
      this.scoreOT ++ ;
    }
    this.cycleTimeEnd();
    const oscoreArray = [this.timeDisplay.toString(), 's', 'o'];
    this.matchDataArray.push(oscoreArray);
    console.log(this.matchDataArray);
  }
  lowerScore() {
    if (this.timeDisplay <= 15.00 ) {
      this.scoreLA ++ ;
    } else {
      this.scoreLT ++ ;
    }
    this.cycleArray[3] ++ ;
    const lscoreArray = [this.timeDisplay.toString(), 's', 'l'];
    this.matchDataArray.push(lscoreArray);
    console.log(this.matchDataArray);
  }
  outerInnerFail() {
    if (this.timeDisplay <= 15.00 ) {
      this.missOA ++ ;
      this.scoreOA --;
    } else {
      this.missOT ++ ;
      this.scoreOT --;
    }
    const oiFailArray = [this.timeDisplay.toString(), 'f', 'o'];
    this.matchDataArray.push(oiFailArray);
    console.log(this.matchDataArray);
  }
  lowerFail() {
    if (this.timeDisplay <= 15.00 ) {
      this.missLA ++ ;
      this.scoreLA --;
    } else {
      this.missLT ++ ;
      this.scoreLT--;
    }
    const lFailArray = [this.timeDisplay.toString(), 'f', 'l'];
    this.matchDataArray.push(lFailArray);
    console.log(this.matchDataArray);
  }
  ballDropped() {
    if (this.timeDisplay <= 15.00 ) {
      this.dropA ++;
      this.pickUpA -- ;
    } else {
      this.dropT ++ ;
      this.pickUpT -- ;
    }
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
    this.defenseArray[0] ++;
    this.defenseArray[1] = this.timeDisplay;
    console.log(this.matchDataArray);
    const popover = await this.popoverController.create({
      component: PopoverComponent, event: ev, cssClass: 'custom-popover', backdropDismiss: false
    });
    popover.onDidDismiss().then(() => {
      const dArray = [this.timeDisplay.toString(), 'd', 'en'];
      this.matchDataArray.push(dArray);
      this.defenseArray[2] = this.timeDisplay;
      this.defenseArray[3] = this.defenseArray[2] - this.defenseArray[1];
      console.log(this.matchDataArray);
    });
    return await popover.present();


  }
  cycleTimeSt() {
    this.cycleArray[1] ++ ;
    if (this.cycleArray[1] === 1) {
      console.log('cycle time started');
      this.cycleArray[0] = this.timeDisplay;
    }
  }
  cycleTimeEnd() {
    this.cycleArray[3] ++ ;
    if (this.cycleArray[1] === this.cycleArray[3]) {
      console.log('ended');
      this.cycleArray[2] = this.timeDisplay;
      this.cycleDataArray.push( this.cycleArray[2] - this.cycleArray[0]);
      this.cycleArray[1] = 0;
      this.cycleArray[3] = 0;
    }
  }
  cycleTimeAvgMed() {
    let totalTime = 0;
    let Avg = 0;
    for (let i = 0; i < this.cycleDataArray.length; i++) {
        totalTime = +this.cycleDataArray[i];
      }
    Avg = totalTime / this.cycleDataArray.length ;
    this.medAvgCycle[0] = Avg;
    this.findMedian();
    }
    findMedian() {
      const values = this.cycleDataArray;
      values.sort((a, b) => a - b);
      const lowMiddle = Math.floor((values.length - 1) / 2);
      const highMiddle = Math.ceil((values.length - 1) / 2);
      this.medAvgCycle[0] = (values[lowMiddle] + values[highMiddle]) / 2;
  }
  attemptClimb() {
    this.fillClimb = 'solid';
    this.climbArray[0] = this.timeDisplay;
    this.matchDataArray.push([this.timeDisplay.toString(), 'c', 'st']);
    console.log(this.matchDataArray);
  }
  submit() {
    this.storage.set('matchData', this.matchDataArray);
  }
  compile() {
    const infArray = [
      this.infoArray[1].toString(), this.infoArray[3].toString() + this.infoArray[4].toString(),
      this.infoArray[0].toString(), this.infoArray[2].toString()];
    const autoArray: string[]  = [
      JSON.stringify( this.initLine), this.pickUpA.toString(10),
      this.scoreOA.toString(10), JSON.stringify(this.scoreLA.toString(10)), JSON.stringify(this.missLA.toString()),
      JSON.stringify(this.missOA.toString())
    ];
    const TeleOpArray: string[] = [
      JSON.stringify(this.pickUpT.toString()), JSON.stringify(this.dropT.toString()),
     JSON.stringify(this.scoreOT.toString()), JSON.stringify(this.scoreLT.toString()),
     JSON.stringify(this.medAvgCycle[0].toString),
     JSON.stringify(this.medAvgCycle[1].toString)
    ];
    const ClimbArray = [
      JSON.stringify(this.climbArray[0].toString()), JSON.stringify(this.climbArray[1].toString()), 
      JSON.stringify(this.climbArray[2].toFixed(2)), JSON.stringify(this.climbS.toString()),
      JSON.stringify(this.trench.toString())
    ];
    const defenArray = [
      JSON.stringify(this.defenseArray[0].toString()), JSON.stringify(this.defenseArray[1].toString()), 
      JSON.stringify(this.defenseArray[2].toString()), JSON.stringify(this.defenseArray[3].toString())
    ];
    console.log(autoArray);
    this.offArray.push(infArray,autoArray, TeleOpArray, ClimbArray, defenArray);
    //this.offArray.push(autoArray);
    console.log(this.offArray);
  }

}
