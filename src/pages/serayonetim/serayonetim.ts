import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HavalandirmakontroluPage} from '../havalandirmakontrolu/havalandirmakontrolu';
import {SicaklikkontroluPage} from '../sicaklikkontrolu/sicaklikkontrolu';
import {SulamakontroluPage} from '../sulamakontrolu/sulamakontrolu';
import {AydinlatmakontroluPage} from '../aydinlatmakontrolu/aydinlatmakontrolu';
import { LoginPage } from '../login/login';




/**
 * Generated class for the SerayonetimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serayonetim',
  templateUrl: 'serayonetim.html',
})
export class SerayonetimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad SerayonetimPage');
  }

  GirisKontrol(){

    if(localStorage.getItem("Islogged")=="true"){
    
      
    
    }else{
      this.navCtrl.push(LoginPage);
    }
    
      }
  HavalandirmaKontrolu(){


    this.navCtrl.push(HavalandirmakontroluPage);


  }
  SicaklikKontrolu(){
    this.navCtrl.push(SicaklikkontroluPage);


  }
  SulamaKontrolu(){

    this.navCtrl.push(SulamakontroluPage);

  }

  AydinlatmaKontrolu(){

    this.navCtrl.push(AydinlatmakontroluPage);


  }

}
