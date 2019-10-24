import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

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

  constructor() { }
chart : any;
// @ViewChild("chart", {static: true}) elementView;

defaultWidth;




  ngOnInit() {
 
    Highcharts.chart('container', {
    
      title: {
          text: 'Oredo sales'
      },
  
      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },
  
      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },
  
      series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          type : undefined
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          type : undefined
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          type : undefined
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          type : undefined
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          type : undefined
      }],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  });



  }

}
