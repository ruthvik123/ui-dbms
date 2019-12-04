import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";
import { DateSenderService } from "src/app/date-sender.service";
import * as Highcharts from "highcharts";
//import * as exporting from 'highcharts/modules/exporting.src';

@Component({
  selector: "app-customer-count",
  templateUrl: "./customer-count.component.html",
  styleUrls: ["./customer-count.component.css"]
})
export class CustomerCountComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private stateService: DateSenderService
  ) {}

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
      .getCustomerCount(this.paramStartDate, this.paramEndDate)
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
          "container2",

          {
            // chart: {
            //   type: "column"
            // }
            //,
            rangeSelector: {
              selected: 1
            },

            xAxis: {
              type: "datetime"
            },
            yAxis: {
              title: {
                text: "Number Of Customers"
              }
            },

            title: {
              text: "Customers per Content Partner"
            },
            plotOptions: {
              series: {
                marker: {
                  radius: 3
                }
              }
            },

            series: seriesData,
          //   navigation: {
          //     buttonOptions: {
          //         enabled: true
          //     }
          // }
          }
        );


        
      });
  }
}
