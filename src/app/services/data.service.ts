import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommonResponse } from '../model.config';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<ICommonResponse>("http://18.221.212.175/api/v1/result/?companyId=10");
   }
}
