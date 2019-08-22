import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginService} from '../../providers/login.service';
import {AnasayfaPage} from '../anasayfa/anasayfa' ;
import {ToastController} from 'ionic-angular'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginService]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginService:LoginService,public toastController:ToastController) {
  }
  Kullanici={}//bununla formdaki veriler çekiliyor.
  telNo:string;
  password:string;

  girisVarmi:string;
  ionViewDidLoad() {
    console.log(localStorage.getItem('Islogged'));
    this.GirisVarmi();

  }


  login(){
    this.telNo=this.Kullanici["telNo"];
    this.password=this.Kullanici["password"];

    this.loginService.login(this.telNo,this.password).subscribe(data=>{
    this.girisVarmi=localStorage.getItem('Islogged');
    if(this.girisVarmi=="true"){
    this.showToast("bottom","Başarılı bir şekilde giriş yaptınız.",3000);
    this.navCtrl.setRoot(AnasayfaPage);

}else{
  this.showToast("bottom","Tel no veya şifre yanlış",3000);
  this.navCtrl.setRoot(LoginPage);
 }
    })
    

  }
  GirisVarmi(){


    if(localStorage.getItem('Islogged')=="true"){

      this.navCtrl.setRoot(AnasayfaPage);


    } 
  }



  
  
  showToast(position,message,duration){  

    let toast=this.toastController.create({


      message:message,
      duration:duration,
      position:position
    });
    toast.present();
  }

}
