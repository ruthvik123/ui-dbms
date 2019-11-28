import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { DataServiceService } from "src/app/services/data-service.service";
import { DateSenderService } from "src/app/date-sender.service";

@Component({
  selector: 'app-service-revenue-component',
  templateUrl: './service-revenue-component.component.html',
  styleUrls: ['./service-revenue-component.component.css']
})
export class ServiceRevenueComponentComponent implements OnInit {

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
      .getServiceShare(this.paramStartDate, this.paramEndDate)
      .subscribe(apiresp => {

        Highcharts.chart(
          "container6",

          {
            chart: {
              type: "column"
            },
            title: {
              text: "Service Type Wise Revenue"
            },
            xAxis: {
              categories: apiresp[0],
              crosshair: true
            },
            yAxis: {
              title: {
                text: "in Qatari Riyal "
              }
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} QR</b></td></tr>',
              footerFormat: "</table>",
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [
              {
                type: undefined,
                name: "Service Revenue",
                data: apiresp[1]
              }
            ]
          }
        );

      });
  }

}
