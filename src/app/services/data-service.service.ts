import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

  monthMapper = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "Jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];

getSalesData1(){ // take in the date here to make the rest call.
return this.http.get('../../assets/sampleSalesData.JSON');
}

getSalesData2(){
  return this.http.get('../../assets/samplesales2.json');
  }

  testFunction(startDate,endDate){
    return this.http.get('http://localhost:8080/sales/'+startDate+'/'+endDate);
    }

    getCustomerCount(startDate,endDate){
      return this.http.get('http://localhost:8080/customerCount/'+startDate+'/'+endDate);
      }
   
    getTotalProfits(startDate,endDate){
      return this.http.get('http://localhost:8080/netProfit/'+startDate+'/'+endDate);
    }

    getRefunds(startDate,endDate){
      return this.http.get('http://localhost:8080/refund/'+startDate+'/'+endDate);
    }

    getPartnerShare(startDate,endDate){
      return this.http.get('http://localhost:8080/contentPartnerShare/'+startDate+'/'+endDate);
    }

    getServiceShare(startDate,endDate){
      return this.http.get('http://localhost:8080/serviceRevenue/'+startDate+'/'+endDate);
    }

    getDataPoints(startDate,endDate){
      return this.http.get('http://localhost:8080/dataPoints/'+startDate+'/'+endDate);
    }


    dateParser(Inputdate) {
      let date = Inputdate.getDate();
      if (date / 10 == 0) {
        date = "0" + String(date);
      } else {
        date = String(date);
      }
      let month = this.monthMapper[Inputdate.getMonth()];
      let year = String(Inputdate.getFullYear());
      let finalDate = date + "-" + month + "-" + year;
      return finalDate;
    }

}
