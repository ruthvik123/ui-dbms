import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "src/app/services/data-service.service";
import { DateSenderService } from "src/app/date-sender.service";
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-partner-share-component',
  templateUrl: './partner-share-component.component.html',
  styleUrls: ['./partner-share-component.component.css']
})
export class PartnerShareComponentComponent implements OnInit {

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
      .getPartnerShare(this.paramStartDate, this.paramEndDate)
      .subscribe(apiresp => {

        Highcharts.chart('container5', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'percentage share of the content partners in the total revenue'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
              }
          },
          series: [{
            type : undefined,
              name: 'share:',
              colorByPoint: true,
              data: apiresp
          }]
      });




      });

  }

}
