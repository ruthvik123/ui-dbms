import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { DataServiceService } from 'src/app/services/data-service.service';
import { forkJoin } from 'rxjs';




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

  constructor(private dataService : DataServiceService) { }
chartData : any;
// @ViewChild("chart", {static: true}) elementView;

defaultWidth;

  ngOnInit() {
 
   
    forkJoin([this.dataService.getSalesData1(),this.dataService.getSalesData2() ]).subscribe(  // pass dates as inputs here 
    apiresp => 
    // console.log(response),
    // this.response = response 


Highcharts.chart('container', 

{
    rangeSelector: {
        selected: 1
    },

    xAxis:{
        type : 'datetime',
    },

    title: {
        text: 'AAPL Stock Price'
    },

    series: [{
        type : undefined,
        name: 'Apple Sales',
        data: apiresp[0],
        tooltip: {
            valueDecimals: 2
        }
    },
    {
        type : undefined,
        name: 'Google Sales',
        data: apiresp[1],
        tooltip: {
            valueDecimals: 2
        }
    }

]
}


),

);




  }

}
