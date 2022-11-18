import { Component, OnInit } from '@angular/core';
import { IModel } from './model.config';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fetch-api-data-testing';

  constructor(private service: DataService) {}
  result!: IModel;
  result1!: IModel;
  result2!: IModel;
  result3!: IModel;
  result4!: IModel;
 
  
  ngOnInit() {
    this.service.getdata()
    .subscribe(response => {
      console.log(response);
      
       this.result = response.data.kpiData["Does the company have a supplier code of conduct?"][0];
       this.result1 = response.data.kpiData["Does the company have a supplier code of conduct?"][1];
       this.result2 = response.data.kpiData["Does the company have a supplier code of conduct?"][2];
       this.result3 = response.data.kpiData["Does the company have a supplier code of conduct?"][3];
       this.result4 = response.data.kpiData["Does the company have a supplier code of conduct?"][4];
    });
}
}
