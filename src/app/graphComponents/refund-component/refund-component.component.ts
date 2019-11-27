import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "src/app/services/data-service.service";
import { DateSenderService } from "src/app/date-sender.service";
import * as Highcharts from "highcharts";


@Component({
  selector: 'app-refund-component',
  templateUrl: './refund-component.component.html',
  styleUrls: ['./refund-component.component.css']
})
export class RefundComponentComponent implements OnInit {

  constructor(
    private dataService: DataServiceService,
    private stateService: DateSenderService
  ) { }

  dateStart: Date;
  dateEnd: Date;

  paramStartDate: String;
  paramEndDate: String;

  ngOnInit() {

    this.dateStart = this.stateService.startDate;
    this.dateEnd = this.stateService.endDate;
    this.paramStartDate = this.dataService.dateParser(this.dateStart);
    this.paramEndDate = this.dataService.dateParser(this.dateEnd);

    this.dataService
    .getRefunds(this.paramStartDate, this.paramEndDate)
    .subscribe(apiresp => {

      let keys = Object.keys(apiresp);

      let seriesData = [];
      let count = 0;
      for (let i of keys) {
        let v = false;
        if (count < 5) {
          v = true;
        }
        let tempObj = {
          type: undefined,
          name: i,
          data: apiresp[i],
          tooltip: {
            valueDecimals: 2
          },
          visible: v,
          marker: {
            symbol: "dot"
          }
        };
        seriesData.push(tempObj);
       count++;
      }

      Highcharts.chart(
        "container4",

        {
          chart: {
            type: "column"
          }
          ,
          rangeSelector: {
            selected: 1
          },

          xAxis: {
            type: "datetime"
          },

          title: {
            text: "Refund"
          },
          plotOptions: {
            series: {
              marker: {
                radius: 3
              }
            }
          },

          series: seriesData,

        }
      );


    });




  }

}
