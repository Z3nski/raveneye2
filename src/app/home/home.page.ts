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

  constructor(public storage:Storage, public router: Router) {
  }
  teamNum: string ;
  alliance: string ; 
  matchType: string ;
  matchNum: string ;
  win: string ;
  name: string ; 
  nameStore(){
    this.storage.set('name', this.name);
    console.log(this.name);
  }
  teamNumStore(){
    let teamNumV = this.teamNum;
    this.storage.set('teamNum',this.teamNum);
    console.log(teamNumV);

  }
  allianceStore(){
    this.storage.set('alliance',this.alliance);
    console.log(this.alliance);
  }
  matchTypeStore(){
    this.storage.set('matchType',this.matchType);
    console.log(this.matchType);
  }
  matchNumStore(){
    this.storage.set('matchNum',this.matchNum);
    console.log(this.matchNum);
  }
  winStore(){
    this.storage.set('win',this.win);
    console.log(this.win);
  }
  
}
