import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { Injectable, Inject } from '@angular/core';

@Injectable()

export class LoginService {


    constructor(private http:Http,@Inject('apiUrl') private apiUrl){}


     login(username,password):Observable<boolean>{

        var headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
         

        let url:string=this.apiUrl+"/Data/MobilLogin";

      return  this.http.post(url,JSON.stringify({username,password}),requestOptions).map(res=>res.json()).map(res=>{
        localStorage.setItem("Islogged",res);
        return res;


       })
    }
    CikisYap(){

    localStorage.removeItem("Islogged");


    }



}