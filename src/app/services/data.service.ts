import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<any>("http://18.221.212.175/api/v1/result/?companyId=10");
   }
}
