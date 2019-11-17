import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

getSalesData1(){ // take in the date here to make the rest call.
return this.http.get('../../assets/sampleSalesData.JSON');
}

getSalesData2(){
  return this.http.get('../../assets/samplesales2.json');
  }

  testFunction(startDate,endDate){
    return this.http.get('http://localhost:8080/sales/'+startDate+'/'+endDate);
    }

}
