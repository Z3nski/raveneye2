import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
numArray = [];
newArray = [];
newName: string ;
newNum: string ;
newAl: string ;
newMatch: string ;
newMatchNum: string;
newWin: string ;
  constructor(public storage: Storage) { }

  ngOnInit() {
    const matchArray = ['name', 'teamNum', 'alliance', 'matchType', 'matchNum', 'win'];
    for (let i = 0; i < matchArray.length; i++) {
      this.storage.get(matchArray[i]).then((val) => {
        this.numArray.push(val);
        // console.log(val);
      });
      }

  }
  save() {
    let tArray = [];
    const matchArray = ['name', 'teamNum', 'alliance', 'matchType', 'matchNum', 'win'];
    const newArray = [this.newName, this.newNum, this.newAl, this.newMatch, this.newMatchNum, this.newWin];
    this.storage.get('matchData').then((val) => {
        tArray = val ;
        for (let i = 0; i < 6; i++) {
          if(newArray[i] !== undefined){
            tArray[i] = newArray[i];
            console.log(tArray[i]);
          }

        }
        this.storage.set('matchData', tArray);
        console.log(tArray);
      });


  }
}
