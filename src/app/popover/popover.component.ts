import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SecondPage } from '../pages/second/second.page';
import { SecondPageModule } from '../pages/second/second.module';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  [x: string]: any;

  constructor(public popoverController: PopoverController) { }
  public timeLeft = 0.00;
  public timeDisplay = 0.00;
  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.timeLeft < 1500) {
        this.timeLeft++;
        this.timeDisplay = this.timeLeft;
      } else if (this.timeLeft === 1500) {

      }
    }, 1000);
  }
  close() {
    console.log(SecondPage.matchDataArray);
    this.popoverController.dismiss();
  }
}
