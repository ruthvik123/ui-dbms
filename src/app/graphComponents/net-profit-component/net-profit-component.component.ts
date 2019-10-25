import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { DataServiceService } from 'src/app/services/data-service.service';
import { HttpHandler } from '@angular/common/http';




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
 
   
this.dataService.getSalesData().subscribe(
    apiresp => 
    // console.log(response),
    // this.response = response 


Highcharts.stockChart('container', 

{
    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'AAPL Stock Price'
    },

    series: [{
        type : undefined,
        name: 'AAPL',
        data: apiresp,
        tooltip: {
            valueDecimals: 2
        }
    }]
}


),

);




  }

}
