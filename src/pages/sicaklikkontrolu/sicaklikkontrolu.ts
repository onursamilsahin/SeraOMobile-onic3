import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service';
import {PostService} from '../../providers/post.service';
import {ToastController} from 'ionic-angular'
import { SicakliklistPage } from '../sicakliklist/sicakliklist';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';




/**
 * Generated class for the SicaklikkontroluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sicaklikkontrolu',
  templateUrl: 'sicaklikkontrolu.html',
  providers:[DegerlerService,PostService],
})
export class SicaklikkontroluPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService,public postService:PostService,
    public toastController:ToastController,public loadingCtrl: LoadingController) {
  }

sonSicaklik:string;
sogutucuFan:boolean;
isiticiFan:boolean;
limit:string;
limitDurum:boolean;


//Form daki veriler için
Sicaklik={};
Limit:string;

//Fan durumları İçin Değişkenler
FanSicak:boolean;
FanSoguk :boolean;
LimitDurum:boolean;

  ionViewDidLoad() {
    this.GirisKontrol();
    console.log('ionViewDidLoad SicaklikkontroluPage');
    this.SicaklikSonDegerler();
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

  SicaklikSonDegerler(){


    this.degerlerService.SicaklikSayfasiDegerlerApi().subscribe(data=>{

this.limit=data.SSLimit;
this.isiticiFan=data.SSIsiticiFan;
this.sogutucuFan=data.SSSogutucuFan;
this.limitDurum=data.SSLimitDurum;
this.sonSicaklik=data.SSSicaklik;

    });
  }


  SicaklikLimitGonder(){
    this.Limit=this.Sicaklik["limit"];

if(this.Limit!=null&&this.Limit!=""&&this.Limit!=" "){

  this.postService.SicaklikLimit(this.Limit).subscribe(data=>{
    if(data=="200"){
    
    
      
      this.showToast('bottom',' Sıcaklık Limiti Güncellendi',3000);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
    
      this.showToast('bottom',' Sıcaklık Limiti Güncellenemedi.',5000);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }
        
        });
        
    

}else{

  this.showToast('bottom',' Sıcaklık limiti boş geçilemez.',3000);
  this.navCtrl.setRoot(SicaklikkontroluPage);
}
  }

  SicaklikFanDurumu(fanTip,veri){
    
    this.presentLoading();

    if (fanTip=="İsitici")
    {
        if (veri=="1")
        {

            this.FanSicak = true;
            this.FanSoguk = false;
            this.LimitDurum = false;

        }
        else if(veri=="0")
        {
            this.FanSicak = false;
            this.FanSoguk = false;
            this.LimitDurum = false;
        }



    }   else if(fanTip=="Sogutucu")
    {
        if (veri=="1")
        {
          this.FanSoguk = true;
          this.FanSicak = false;
          this.LimitDurum = false;
        }
        else if (veri=="0")
        {

          this.FanSoguk = false;
          this.FanSicak = false;
          this.LimitDurum = false;
        }
        
    }


this.postService.SicaklikDurumGonder(this.LimitDurum,this.FanSoguk,this.FanSicak).subscribe(data=>{
if(fanTip=="İsitici"){

if(veri=="1"){

  if(data=="200"){


    setTimeout(() => {
      this.showToast('bottom',' Isıtıcı Fan Çalıştı.',3000);
    }, 3000);
   

    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }else{
    setTimeout(() => {
      this.showToast('bottom',' Fan işlemi Tamamlanamadı.',5000);
    }, 3000);
   
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  
  }
}else if(veri=="0"){
  if(data=="200"){

    setTimeout(() => {
      this.showToast('bottom',' Isıtıcı Fan Durduruldu.',3000);
    }, 3000);
   
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }else{
  
    setTimeout(() => {
      this.showToast('bottom',' Fan işlemi Tamamlanamadı.',5000);
    }, 3000);
   
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  
  }


}



}else if(fanTip=="Sogutucu"){

  if(veri=="1"){

    if(data=="200"){

      setTimeout(() => {
        this.showToast('bottom',' Sogutucu Fan Çalıştı.',3000);
      }, 3000);
     
  
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
      setTimeout(() => {
        this.showToast('bottom',' Fan işlemi Tamamlanamadı.',5000);
      }, 3000);
     
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }
  }else if(veri=="0"){


    if(data=="200"){


      setTimeout(() => {
        this.showToast('bottom',' Sogutucu Fan Durduruldu.',3000);
      }, 3000);
     
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }else{
    
      setTimeout(() => {
        this.showToast('bottom',' Fan işlemi Tamamlanamadı.',5000);
      }, 3000);
     
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    }
  }


}


      


});



  }

  SicaklikList(){

    this.navCtrl.push(SicakliklistPage);
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
