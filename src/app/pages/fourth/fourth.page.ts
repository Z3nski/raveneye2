import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {
qrdata: string ;
  constructor(public storage: Storage) { }
ngOnInit() { }
  ionViewDidEnter() {
    this.storage.get('official').then((val) => {
      this.qrdata = val.join();
      console.log(this.qrdata);
    });
  }

}
