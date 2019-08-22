import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostService } from '../../providers/post.service';
import { DegerlerService } from '../../providers/degerler.service'

/**
 * Generated class for the AydinlatmakontroluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aydinlatmakontrolu',
  templateUrl: 'aydinlatmakontrolu.html',
  providers: [PostService, DegerlerService]
})
export class AydinlatmakontroluPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public degerlerService: DegerlerService, public postService: PostService) {
  }

  ionViewDidLoad() {

    this.GirisKontrol();
    this.LdrSeviyeDurum();
    this.LedDurum();

    console.log('ionViewDidLoad AydinlatmakontroluPage');
  }

  Tip: string;
  DusukSeviyeDeg: string;
  OrtaSeviyeDeg: string;
  YuksekSeviyeDeg: string;
  DusukSeviyeDegbool: boolean;
  OrtaSeviyeDegbool: boolean;
  YuksekSeviyeDegbool: boolean;



  //Geri gelen durum bilgileri için değişkenler

  dusukSeviyeDurumBilgisi: boolean;
  ortaSeviyeDurumBilgisi: boolean;
  yuksekSeviyeDurumBilgisi: boolean;

  //Led durum değişkeni
  ledDurumDeg:boolean;

  GirisKontrol() {

    if (localStorage.getItem("Islogged") == "true") {



    } else {
      this.navCtrl.push(LoginPage);
    }

  }
  SayfaYenile(){


    this.navCtrl.setRoot(this.navCtrl.getActive().component);


  }

  DusukSeviyeGonder() {
    this.Tip = "Dusuk";

    if (this.DusukSeviyeDeg == "1") {

      this.DusukSeviyeDegbool = true;


    } else if (this.DusukSeviyeDeg == "0") {

      this.DusukSeviyeDegbool = false;
    }

    this.postService.LdrSeviyeDurum(this.DusukSeviyeDegbool, this.Tip);


  }

  OrtaSeviyeGonder() {
    this.Tip = "Orta";
    if (this.OrtaSeviyeDeg == "1") {

      this.OrtaSeviyeDegbool = true;


    } else if (this.OrtaSeviyeDeg == "0") {

      this.OrtaSeviyeDegbool = false;
    }


    this.postService.LdrSeviyeDurum(this.OrtaSeviyeDegbool, this.Tip);
  }
  YuksekSeviyeGonder() {
    this.Tip = "Yuksek";
    if (this.YuksekSeviyeDeg == "1") {

      this.YuksekSeviyeDegbool = true;


    } else if (this.YuksekSeviyeDeg == "0") {

      this.YuksekSeviyeDegbool = false;
    }
    this.postService.LdrSeviyeDurum(this.YuksekSeviyeDegbool, this.Tip);

  }

  LdrSeviyeDurum() {

    this.degerlerService.LdrSeviyeDurumList().subscribe(data => {

      data.forEach(element => {

        if (element.LdrSeviye1 == "Düşük") {

          this.dusukSeviyeDurumBilgisi = element.LdrSeviyeDurum;
        } else if (element.LdrSeviye1 == "Orta") {

          this.ortaSeviyeDurumBilgisi = element.LdrSeviyeDurum;


        } else if (element.LdrSeviye1 == "Yüksek") {

          this.yuksekSeviyeDurumBilgisi = element.LdrSeviyeDurum;
        }
      });


    });
  }

  LedDurum(){

this.degerlerService.LedDurumDon().subscribe(data=>{
this.ledDurumDeg=data.LDurum;

})


  }






}
