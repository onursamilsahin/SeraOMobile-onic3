import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service';
import {Tnem} from '../../entities/Tnem';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SulamalistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sulamalist',
  templateUrl: 'sulamalist.html',
  providers:[DegerlerService]
})
export class SulamalistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService) {
  }

  tNem:Tnem[];
  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad SulamalistPage');
    this.SulamaList();
  }


  GirisKontrol(){

    if(localStorage.getItem("Islogged")=="true"){
    
      
    
    }else{
      this.navCtrl.push(LoginPage);
    }
    
      }
      SayfaYenile(){


        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    
      }
SulamaList(){

this.degerlerService.SulamaListesi().subscribe(data=>{

 this.tNem=data;
})


}



}
