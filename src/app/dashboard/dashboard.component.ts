import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { DataServiceService } from "src/app/services/data-service.service";
import { DateSenderService } from "src/app/date-sender.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  checked1: boolean = true; // net-profit-component
  checked2: boolean = true; //  customer-count-component
  checked3: boolean = true; //  app-total-profits-component
  checked4: boolean = true; // app-refund-component
  checked5: boolean = true; // app-partner-share-component
  checked6: boolean = true; // app-service-revenue-component
  dataCheck = false;

   dataPoints ;

   dateStart: Date;
   dateEnd: Date;
 
   paramStartDate: String;
   paramEndDate: String;

  toggle: boolean = false;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private dataService: DataServiceService,
    private stateService: DateSenderService
    ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.dateStart = this.stateService.startDate;
    this.dateEnd = this.stateService.endDate;
    this.paramStartDate = this.dataService.dateParser(this.dateStart);
    this.paramEndDate = this.dataService.dateParser(this.dateEnd);
    this.dataService
    .getDataPoints(this.paramStartDate, this.paramEndDate)
    .subscribe(apiresp => {

this.dataPoints = apiresp["numOftuples"];
this.dataCheck = true;
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  changeValue(value) {
    value = !value;
    // console.log(value);
  }

  changeValue2(value) {
    value = !value;
    this.toggle = value;
    // console.log(this.toggle);
  }
}
