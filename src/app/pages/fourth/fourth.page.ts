import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {
qrdata: string ;
  constructor(public storage: Storage) { }

  ionViewWillEnter() {
    this.storage.get('matchData').then((val)=>{
      this.qrdata = val ; 
    })
  }

}
