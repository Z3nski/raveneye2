import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPageRoutingModule } from './second-routing.module';

import { SecondPage } from './second.page';
import { IonicStorageModule } from '@ionic/storage';
import { PopoverComponent } from 'src/app/popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  entryComponents:[PopoverComponent],
  declarations: [SecondPage, PopoverComponent]
})
export class SecondPageModule {}
