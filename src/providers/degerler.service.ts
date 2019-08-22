import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch' 
import { Injectable, Inject } from '@angular/core';
import {SonDegerler} from '../entities/sonDegerler' 
import {HavalandirmaSDegerler} from '../entities/havalandirmaSDegerler'
import {Dht11} from '../entities/dht11'
import {SicaklikSDegerler} from '../entities/sicaklikSDegerler'
import {SulamaSDegerler} from '../entities/sulamaSDegerler'
import {Tnem} from '../entities/Tnem'
import { LdrSeviyeDurum } from '../entities/LdrSeviyeDurum';
import { Led } from '../entities/led';
 

@Injectable()
export class DegerlerService {

    constructor(private http:Http,@Inject('apiUrl') private apiUrl){}
   

    SonDurum(): Observable<SonDegerler>{

        
        return this.http.get(this.apiUrl+"/Data/MobilDegerlerSon/").map(response=>response.json());

     
       }

       HavalandirmaSayfasiDegerlerapi(): Observable<HavalandirmaSDegerler>{

        
        return this.http.get(this.apiUrl+"/Data/MobilHavalandirmaSOnDegerler/").map(response=>response.json());

     
       }
       HavalandirmaListesi(): Observable<Dht11[]>{

        
        return this.http.get(this.apiUrl+"/Data/Dht11List/").map(response=>response.json());

     
       }

       SicaklikSayfasiDegerlerApi():Observable<SicaklikSDegerler>{


        return this.http.get(this.apiUrl+"/Data/MobilSicaklikSonDegerler/").map(response=>response.json());

       }
       SulamaSayfasiDegerlerApi():Observable<SulamaSDegerler>{


        return this.http.get(this.apiUrl+"/Data/MobilSulamaSonDegerler/").map(response=>response.json());

       }

       SulamaListesi():Observable<Tnem[]>{

        return this.http.get(this.apiUrl+"/Data/TNemList/").map(response=>response.json());
       }

       LdrSeviyeDurumList():Observable<LdrSeviyeDurum[]>{

        return this.http.get(this.apiUrl+"/Data/LdrSeviyeBilgisi/").map(response=>response.json());

       }
       LedDurumDon():Observable<Led>{

        return this.http.get(this.apiUrl+"/Data/LedDurumDon/").map(response=>response.json());

       }
       




}