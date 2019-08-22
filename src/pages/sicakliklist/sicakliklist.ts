import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DegerlerService } from '../../providers/degerler.service'
import { Dht11 } from '../../entities/dht11'
import { LoginPage } from '../login/login';



/**
 * Generated class for the SicakliklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sicakliklist',
  templateUrl: 'sicakliklist.html',
  providers:[DegerlerService]
})
export class SicakliklistPage {
dht11:Dht11[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService) {
  }

  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad SicakliklistPage');
    this.SicaklikListesi();
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

  SicaklikListesi(){
//bu aynı zamanda dht11 verilerini geri döndürüyor.
   this.degerlerService.HavalandirmaListesi().subscribe(data=>{

this.dht11=data;

   });



  }

}
