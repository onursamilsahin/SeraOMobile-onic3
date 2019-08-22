import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DegerlerService} from '../../providers/degerler.service';
import {PostService} from '../../providers/post.service'
import {SonDegerler} from '../../entities/sonDegerler'
import{SerayonetimPage} from '../serayonetim/serayonetim'
import { LoginPage } from '../login/login';
/**
 * Generated class for the AnasayfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anasayfa',
  templateUrl: 'anasayfa.html',
  
  providers:[DegerlerService,PostService],
 
 
})
export class AnasayfaPage {
  //Son Degerler için Değişkenler Service den geri dönen değerleri toplama için
  sicaklikdeg:String;
  havaNemDeg:String;
  tNemdeg:String;
  kapakDurum:boolean;
  yagmurDurum:boolean;
//select ten gelen değerleri almak için değişkener
  YagmurVarsadeg: string;
  YagmurYoksadeg: string;
  YagmurVarsadegbool: boolean;
  YagmurYoksadegbool: boolean;
  tip:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public degerlerService:DegerlerService,public postService:PostService) {
  }

  ionViewDidLoad() {
    this.GirisKontrol();
    this.SonDurum();
   
 
    console.log('ionViewDidLoad AnasayfaPage');
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

  SonDurum(){


    this.degerlerService.SonDurum().subscribe(t=>{


   this.sicaklikdeg=t.SicaklikDeg;
   this.havaNemDeg=t.HavaNemDeg;
   this.tNemdeg=t.TNemDeg;
   this.kapakDurum=t.KapakDurum;
   this.yagmurDurum=t.YagmurDurum;
  
      
    })
  }


  YagmurVarsa() {
    this.tip="Var";
     if(this.YagmurVarsadeg=="1"){

      this.YagmurVarsadegbool=true;
    }else if(this.YagmurVarsadeg=="0"){
this.YagmurVarsadegbool=false;
    }
    this.postService.KapakDurumBilgisi(this.YagmurVarsadegbool,this.tip);


  }
  YagmurYoksa() {
    this.tip="Yok";
   
    if(this.YagmurYoksadeg=="1"){

      this.YagmurYoksadegbool=true;
    }else if(this.YagmurYoksadeg=="0"){
this.YagmurYoksadegbool=false;
    }
    this.postService.KapakDurumBilgisi(this.YagmurYoksadegbool,this.tip);


  }
  SeraYonetim(){

    this.navCtrl.push(SerayonetimPage);
    

  }

}
