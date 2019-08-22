import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service'
import { Dht11 } from '../../entities/dht11';
import { LoginPage } from '../login/login';
/**
 * Generated class for the HavalandirmalistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-havalandirmalist',
  templateUrl: 'havalandirmalist.html',
  providers:[DegerlerService],
})
export class HavalandirmalistPage {
  dht11:Dht11[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService) {
  
   
  }
 

  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad HavalandirmalistPage');
    this.HavalandirmaListesi();
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
 
HavalandirmaListesi(){


this.degerlerService.HavalandirmaListesi().subscribe(data=>{

this.dht11=data;


});

}



}
