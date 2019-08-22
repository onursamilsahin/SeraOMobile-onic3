import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service';
import {PostService} from '../../providers/post.service';
import { HavalandirmalistPage } from '../havalandirmalist/havalandirmalist';
import {ToastController} from 'ionic-angular'
import {LoginPage} from '../login/login'


/**
 * Generated class for the HavalandirmakontroluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-havalandirmakontrolu',
  templateUrl: 'havalandirmakontrolu.html',
  providers:[DegerlerService,PostService],

})
export class HavalandirmakontroluPage {

 donus:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService,public postService:PostService,public toastController:ToastController) {
  }

//Kapak durumunu boolean göndermek için 
  kdurum:boolean;

  hSHavaNemDeg:string;
  hSKapakDurum:boolean;
  hSHavalandirmaLimit:string;
  //limit buton
  Limit:string;
  Havalandirma={}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HavalandirmakontroluPage');
    this.GirisKontrol();
    this.HavalandirmaSayfasiDegerler();
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
  HavalandirmaSayfasiDegerler(){

this.degerlerService.HavalandirmaSayfasiDegerlerapi().subscribe(data=>{

this.hSHavaNemDeg=data.HSHavaNemDeg;
this.hSHavalandirmaLimit=data.HSHavalandirmaLimit;
this.hSKapakDurum=data.HSKapakDurum;

})


  }

  HavalandirmaLimit(){


 this.Limit=this.Havalandirma["limit"];
 this.postService.HavalandirmaLimit(this.Limit).subscribe(data=>{

  this.showToast('bottom','Limit Güncellendi2',3000);
this.navCtrl.setRoot(this.navCtrl.getActive().component);

});

 
 


  }

  showToast(position,message,duration){  

    let toast=this.toastController.create({


      message:message,
      duration:duration,
      position:position
    });
    toast.present();
  }
  HavalandirmaDurumu(durum){

 

    this.postService.HavalandirmaDurumGonder(durum);


  }


  HavalandirmaList(){


this.navCtrl.push(HavalandirmalistPage);




  }
}
