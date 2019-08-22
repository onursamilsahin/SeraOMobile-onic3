import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service';
import {PostService} from '../../providers/post.service';
import {ToastController} from 'ionic-angular';
import {SulamalistPage} from '../sulamalist/sulamalist'
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the SulamakontroluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sulamakontrolu',
  templateUrl: 'sulamakontrolu.html',
  providers:[DegerlerService,PostService],
})
export class SulamakontroluPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService,public postService:PostService,
    public toastController:ToastController,public loadingCtrl:LoadingController ) {
  }

  //sulama sayfasi degerleri için değişkenler

  sonTnem:string;
  tNemLimit:string;
  tNemLimitDurum:boolean;
  spDurum:boolean;

ToprakNem={};
TNemlimit:string;
LimitDurum:boolean;
  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad SulamakontroluPage');
    this.SulamaSonDegerler();
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

  SulamaSonDegerler(){

this.degerlerService.SulamaSayfasiDegerlerApi().subscribe(data=>{

this.sonTnem=data.SSSTNem;
this.tNemLimit=data.SSLimit;
this.tNemLimitDurum=data.SSLimitDurum;
this.spDurum=data.SSSulamaDurumu;


})

  }


  ToprakNemLimiti(){
this.TNemlimit=this.ToprakNem["limit"];

 if(this.TNemlimit!=""&& this.TNemlimit!=null && this.TNemlimit!=" "){


  this.LimitDurum=true;

  this.postService.ToprakNemLimit(this.TNemlimit,this.LimitDurum).subscribe(data=>{
    if(data=="200"){
    
    
      
      this.showToast('bottom',' Toprak Nem Limiti Güncellendi',3000);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
    
      this.showToast('bottom',' Toprak Nem Limiti Güncellenemedi.',5000);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }
        
        });
  

}else{

  this.showToast('bottom',' Limit Değeri Boş Girilemez.',3000);
  this.navCtrl.setRoot(SulamakontroluPage);

}
  }

  SulamaDurum(SDurum){
    this.presentLoading();


    this.postService.SulamaDurumGonder(SDurum).subscribe(data=>{

   if(SDurum=="1"){
    if(data=="200"){

      setTimeout(() => {
        this.showToast('bottom',' Sulama İşlemi Başladı.',3000);
      }, 3000);
     
  
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
    
      setTimeout(() => {
        this.showToast('bottom',' Sulama işleminde teknik bir hata var .',5000);
      }, 3000);
     
  
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }



   }else if(SDurum=="0"){

    if(data=="200"){


      setTimeout(() => {
        this.showToast('bottom',' Sulama durduruldu. ',3000);
      }, 3000);
     
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
      setTimeout(() => {
        this.showToast('bottom',' Sulama işleminde teknik bir hata var .',5000);
      }, 3000);
     
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }

   }
   
       
    })



  }


  SulamaListesi(){



this.navCtrl.push(SulamalistPage);



  }





  showToast(position,message,duration){  

    let toast=this.toastController.create({


      message:message,
      duration:duration,
      position:position
    });
    toast.present();
  }
  presentLoading() {
    let loading = this.loadingCtrl.create({
   
      content: 'Lütfen Bekleyiniz...',
 
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

}
