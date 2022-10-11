import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl:string='http://localhost:8080/api/';
  constructor(private http:HttpClient) {}

  
  printtrade(){
    return  (this.http.get(`${this.baseUrl}printtrade`))
   }

   savetrade(trade:any){
   // console.log(trade);
    return (this.http.post(`${this.baseUrl}booktrade`,trade,{
      responseType:'text'
    }));   }
}
