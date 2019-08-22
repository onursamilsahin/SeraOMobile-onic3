import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SicakliklistPage } from './sicakliklist';

@NgModule({
  declarations: [
    SicakliklistPage,
  ],
  imports: [
    IonicPageModule.forChild(SicakliklistPage),
  ],
})
export class SicakliklistPageModule {}
