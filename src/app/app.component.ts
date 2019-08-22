import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import {LoginService} from '../providers/login.service'
 








@Component({
  templateUrl: 'app.html',
  providers:[LoginService]
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public loginService:LoginService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Anasayfa', component: AnasayfaPage },
      { title: 'Sera Yönetim', component: SerayonetimPage },
      { title: 'Havalandırma Kontrolü', component: HavalandirmakontroluPage },
      { title: 'Sıcaklık Kontrolü', component: SicaklikkontroluPage },
      { title: 'Sulama Kontrolü', component: SulamakontroluPage },
      { title: 'Aydinlatma Kontrolü', component: AydinlatmakontroluPage }

    
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  CikisYap() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.loginService.CikisYap();
    this.nav.push(LoginPage);
  }
}
