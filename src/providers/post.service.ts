import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { Injectable, Inject } from '@angular/core';

@Injectable()

export class PostService {

    constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }
    Kdurum:boolean;
    donus: boolean;
    KapakDurumBilgisi(KapakBilgisi, tip): void {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/MobilKapakDurumBilgisi";

        this.http.post(url, JSON.stringify({ KapakBilgisi, tip }), requestOptions).subscribe();

    }
    LdrSeviyeDurum(LdrSeviyeDurum, Tip): void {

      var headers = new Headers();

      headers.append('Content-Type', 'application/json');
      const requestOptions = new RequestOptions({ headers: headers });
      let url: string = this.apiUrl + "/Data/MobilLdrSeviyeDurumBilgisi";

      this.http.post(url, JSON.stringify({ LdrSeviyeDurum, Tip }), requestOptions).subscribe();

  }

    HavalandirmaLimit(HavalandirmaLimiti):Observable<string> {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/HavaLimitEkle";

     return this.http.post(url, JSON.stringify({ HavalandirmaLimiti }), requestOptions).map(res=>res.json()).map(res=>{

                    return res;

        });
 
    }

    SicaklikLimit(Limit):Observable<string>{

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/SicaklikLimitEkle";

        
     return this.http.post(url, JSON.stringify({ Limit }), requestOptions).map(res=>res.json()).map(res=>{

        return res;

});

    }

    HavalandirmaDurumGonder(Kdurum): void {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/KapakDurumGuncelle";

              console.log(Kdurum);
   

        this.http.post(url, JSON.stringify({Kdurum}), requestOptions).subscribe();
    
    }
    SicaklikDurumGonder(LimitDurum,FanSoguk,FanSicak): Observable<string> {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/FanDurumGuncelle";

             
   

      return  this.http.post(url, JSON.stringify({LimitDurum,FanSoguk,FanSicak}), requestOptions).map(data=>data.json()).map(data=>{


        return data;
      })
    }
    
    ToprakNemLimit(NemLimitDeger,LimitDurum ):Observable<string>{
        
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/TnemLimitEkle";
        
     return this.http.post(url, JSON.stringify({ NemLimitDeger,LimitDurum}), requestOptions).map(res=>res.json()).map(res=>{

        return res;

});

    }

    SulamaDurumGonder(SPDurum): Observable<string> {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        let url: string = this.apiUrl + "/Data/SuPompasiDurumGuncelle";

             
   

      return  this.http.post(url, JSON.stringify({SPDurum}), requestOptions).map(data=>data.json()).map(data=>{


        return data;
      })
    }



}