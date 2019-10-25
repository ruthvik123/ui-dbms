import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

getSalesData(){
return this.http.get('../../assets/sampleSalesData.JSON');
}

}
