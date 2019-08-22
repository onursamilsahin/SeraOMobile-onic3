import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { SerayonetimPage } from '../pages/serayonetim/serayonetim';
import { HavalandirmakontroluPage } from '../pages/havalandirmakontrolu/havalandirmakontrolu';
import { SicaklikkontroluPage } from '../pages/sicaklikkontrolu/sicaklikkontrolu';
import { SulamakontroluPage } from '../pages/sulamakontrolu/sulamakontrolu';
import { AydinlatmakontroluPage } from '../pages/aydinlatmakontrolu/aydinlatmakontrolu';
import { HavalandirmalistPage } from '../pages/havalandirmalist/havalandirmalist';
import { SicakliklistPage } from '../pages/sicakliklist/sicakliklist';
import {SulamalistPage} from '../pages/sulamalist/sulamalist';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AnasayfaPage,
    SerayonetimPage,
    HavalandirmakontroluPage,
    SicaklikkontroluPage,
    SulamakontroluPage,
    AydinlatmakontroluPage,
    HavalandirmalistPage,
    SicakliklistPage,
    SulamalistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{

      backButtonText: 'Geri Dön',
     
    },
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AnasayfaPage,
    SerayonetimPage,
    HavalandirmakontroluPage,
    SicaklikkontroluPage,
    SulamakontroluPage,
    AydinlatmakontroluPage,
    HavalandirmalistPage,
    SicakliklistPage,
    SulamalistPage
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://192.168.43.253:55502/api"},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
