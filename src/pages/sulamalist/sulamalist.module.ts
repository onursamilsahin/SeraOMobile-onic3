import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SulamalistPage } from './sulamalist';

@NgModule({
  declarations: [
    SulamalistPage,
  ],
  imports: [
    IonicPageModule.forChild(SulamalistPage),
  ],
})
export class SulamalistPageModule {}
