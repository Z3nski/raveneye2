import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  teamNum: string ;
  alliance: string ;
  allianceColor: string ;
  allianceNum: string ;
  matchType: string ;
  matchNum: string ;
  win: string ;
  name: string ;
  public colorMode = 'danger';
  public  fillI = 0;
  constructor(public storage: Storage, public router: Router) {
  }
  ionViewWillEnter() {
    this.name = undefined;
    this.teamNum = undefined;
    this.allianceColor = undefined;
    this.allianceNum = undefined;
    this.matchType = undefined;
    this.matchNum = undefined;
    this.win = 'N/A';
   }
  ionViewDidLeave() {
    const alliance = this.allianceColor + this.allianceNum ;
    const matchKeys = ['name', 'teamNum', 'alliance', 'matchType', 'matchNum', 'win'];
    const matchArrayI = [this.name, this.teamNum, alliance, this.matchType, this.matchNum, this.win];
    for (let i = 0; i <= matchArrayI.length; i++) {
      if (matchArrayI[i] === undefined) {
        this.storage.set(matchKeys[i], 'N/A');
      } else {
       this.storage.set(matchKeys[i], matchArrayI[i]);
     }
    }
  }
  nameStore() {
    this.storage.set('name', this.name);
    console.log(this.name);
  }
  teamNumStore() {
    const teamNumV = this.teamNum;
    this.storage.set('teamNum', this.teamNum);
    console.log(teamNumV);

  }
  allianceStore() {
    if (this.allianceColor === 'R') {
      this.colorMode = 'danger';
    }
    const alliancePlace = this.allianceColor + this.allianceNum ;
    this.alliance = alliancePlace ;
    this.storage.set('alliance', alliancePlace);
    console.log(alliancePlace);
  }
  matchTypeStore() {
    this.storage.set('matchType', this.matchType);
    console.log(this.matchType);
  }
  matchNumStore() {
    this.storage.set('matchNum', this.matchNum);
    console.log(this.matchNum);
  }
  winStore() {
    this.storage.set('win', this.win);
    console.log(this.win);
  }


}
