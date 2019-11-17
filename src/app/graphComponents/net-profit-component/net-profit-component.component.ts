import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { DataServiceService } from 'src/app/services/data-service.service';
import { forkJoin } from 'rxjs';
import {DateSenderService} from '../../date-sender.service';




@Component({
  selector: 'app-net-profit-component',
  templateUrl: './net-profit-component.component.html',
  styleUrls: ['./net-profit-component.component.css']
})
export class NetProfitComponentComponent implements OnInit,AfterViewInit {
    ngAfterViewInit() {
        // this.defaultWidth = this.elementView.nativeElement.offsetWidth;
        // console.log(this.defaultWidth);
        
    }
   

    dateStart : Date;
    dateEnd : Date;
    
  
    paramStartDate : String;
    paramEndDate : String;
   monthMapper = ['jan','feb','mar','apr','may','jun','Jul','aug','sept','oct','nov','dec']; 

data : any;

  constructor(private dataService : DataServiceService, private stateService : DateSenderService) { }
chartData : any;
// @ViewChild("chart", {static: true}) elementView;

defaultWidth;

  ngOnInit() {
 
    this.dateStart = this.stateService.startDate;
    this.dateEnd = this.stateService.endDate;
    this.paramStartDate = this.dateParser(this.dateStart);
    this.paramEndDate = this.dateParser(this.dateEnd);

    forkJoin([this.dataService.testFunction(this.paramStartDate,this.paramEndDate)]).subscribe(  // pass dates as inputs here 
    apiresp => 

    {


console.log(apiresp[0]);

let keys = Object.keys(apiresp[0]);

let seriesData = [];

for(let i of keys){
let tempObj = 
{
            type : undefined,
            name: i,
            data: apiresp[0][i],
            tooltip: {
                valueDecimals: 2
            }
        }
        seriesData.push(tempObj);
}





    Highcharts.chart('container', 

    {
        rangeSelector: {
            selected: 1
        },
    
        xAxis:{
            type : 'datetime',
        },
    
        title: {
            text: 'Net Profits'
        },
    
         series: seriesData
    
    }
    
    
    )




}

);




  }

  dateParser(Inputdate){
    let date = Inputdate.getDate();
    if(date / 10 == 0){
      date = '0'+String(date);
    }
    else{
      date = String(date);
    }
    let month = this.monthMapper[Inputdate.getMonth()];
    let year = String(Inputdate.getFullYear());
    let finalDate = date+'-'+month+'-'+year;
    return finalDate;
   }

//    graphFormatter(response){
     
//     let res = {};
//     for( let i of response){
//       if( ! (i["contentPartner"] in res)){
//       res[i["contentPartner"]] = [[i["date"],i["price"] ]];
//       }
//       else{
//         res[i["contentPartner"]].push([i["date"],i["price"] ]);  
//       }
//     }
//     return res;
//   }




}
