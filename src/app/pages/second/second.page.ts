import { Component, OnInit } from '@angular/core';
import { StorageConfigToken, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { stringify } from 'querystring';
import { R3TargetBinder } from '@angular/compiler';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(public storage: Storage) { }
matchArray: string; 
initLine: boolean ;
wheel: number = 0;
stage: string ;
pickUp: number = 0; 
scoreIn: number =0;
scoreOut: number =0;
scoreLow: number = 0 ;
trench : number = 0;
public numArray = [];
public timeLeft: number = 0.00;
public timeDisplay: number = 0.00;
private isButtonVisible = false; 
interval;
climbS: string; 
climbStat = 0;
public matchDataArray = [];
  ngOnInit() {
    let matchArray = ['name','teamNum','alliance','matchType','matchNum','win']
    for (let i = 0; i < matchArray.length; i++) {
      this.storage.get(matchArray[i]).then((val)=>{
        this.numArray.push(val); 
        this.matchDataArray.push(val);
        //console.log(val);
      })
      }
      console.log(this.numArray);
      
    this.interval = setInterval(() => {
      if(this.timeLeft < 1500) {
        this.timeLeft++;
        this.timeDisplay = this.timeLeft /10.00;
      } else if(this.timeLeft == 1500) {
        this.submit(); 
        this.isButtonVisible = true ;

      }
    },100)
    this.storage.remove('matchData');
    }
  climb(){
    this.matchDataArray.push(this.timeDisplay,'c', this.climbS);
    console.log(this.matchDataArray);
    
    }
  crossedInit(){
    this.initLine = true ;
    this.matchDataArray.push(this.timeDisplay,'1', this.initLine);
    console.log(this.matchDataArray);
    
  }
  wheelSpin(){
    this.wheel ++ ;
    this.matchDataArray.push(this.timeDisplay,'w', this.wheel);
    console.log(this.matchDataArray);
  }     
  stageInt(){
    this.matchDataArray.push(this.timeDisplay,'ss', this.stage);
    console.log(this.matchDataArray);
  }
  ballPickUp(){
    this.pickUp ++ ;
    this.matchDataArray.push(this.timeDisplay,'pu', '1');
    console.log(this.matchDataArray);
  }
  innerScore(){
    this.matchDataArray.push(this.timeDisplay,'s', 'i');
    console.log(this.matchDataArray);
  }
  outerScore(){
    this.matchDataArray.push(this.timeDisplay,'s', 'o');
    console.log(this.matchDataArray);
  }
  lowerScore(){
    this.matchDataArray.push(this.timeDisplay,'s', 'l');
    console.log(this.matchDataArray);
  }
  outerInnerFail(){
    this.matchDataArray.push(this.timeDisplay, 'f', 'o');
    console.log(this.matchDataArray);
  }
  lowerFail(){
    this.matchDataArray.push(this.timeDisplay,'f', 'l');
    console.log(this.matchDataArray);
  }
  ballDropped(){
    this.matchDataArray.push(this.timeDisplay,'pu', 'f');
    console.log(this.matchDataArray);
  }
  trenchRun(){
    this.trench ++ ;
    this.matchDataArray.push(this.timeDisplay,'tr', this.trench);
    console.log(this.matchDataArray);
  }
  submit(){
    this.storage.set('matchData',this.matchDataArray);
  }
 
}