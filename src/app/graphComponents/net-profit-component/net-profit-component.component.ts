import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { DataServiceService } from "src/app/services/data-service.service";
import { forkJoin } from "rxjs";
import { DateSenderService } from "../../date-sender.service";

@Component({
  selector: "app-net-profit-component",
  templateUrl: "./net-profit-component.component.html",
  styleUrls: ["./net-profit-component.component.css"]
})
export class NetProfitComponentComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    // this.defaultWidth = this.elementView.nativeElement.offsetWidth;
    // console.log(this.defaultWidth);
  }

  dateStart: Date;
  dateEnd: Date;

  paramStartDate: String;
  paramEndDate: String;

  constructor(
    private dataService: DataServiceService,
    private stateService: DateSenderService
  ) {}
  chartData: any;
  // @ViewChild("chart", {static: true}) elementView;

  defaultWidth;

  ngOnInit() {
    this.dateStart = this.stateService.startDate;
    this.dateEnd = this.stateService.endDate;
    this.paramStartDate = this.dataService.dateParser(this.dateStart);
    this.paramEndDate = this.dataService.dateParser(this.dateEnd);

    console.log(this.paramStartDate);
    console.log(this.paramEndDate);

    forkJoin([
      this.dataService.testFunction(this.paramStartDate, this.paramEndDate)
    ]).subscribe(
      // pass dates as inputs here
      apiresp => {
        console.log(apiresp[0]);

        let keys = Object.keys(apiresp[0]);

        let seriesData = [];
        let count = 0;
        for (let i of keys) {
          let v = false;
          if(count < 2){
            v = true;
          }
          let tempObj = {
            type: undefined,
            name: i,
            data: apiresp[0][i],
            tooltip: {
              valueDecimals: 2
            },
            visible : v,
            marker: {
              symbol: 'dot'
          }
          };
          seriesData.push(tempObj);
          count++;
        }

        Highcharts.chart(
          "container",

          {
            rangeSelector: {
              selected: 1
            },

            xAxis: {
              type: "datetime"
            },
            yAxis: {
              title: {
                text: " Revenue in USD "
              }
            },

            title: {
              text: "Content Partner - Daily Revenue Details"
            },
            plotOptions: {
              series: {
                  marker: {
                      radius: 3
                  }
              }
          },

            series: seriesData
          }
        );
      }
    );
  }


}
