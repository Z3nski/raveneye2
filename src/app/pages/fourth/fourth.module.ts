import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthPageRoutingModule } from './fourth-routing.module';

import { FourthPage } from './fourth.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourthPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [FourthPage]
})
export class FourthPageModule {}
