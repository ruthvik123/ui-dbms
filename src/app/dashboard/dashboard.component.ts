import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {DateSenderService} from '../date-sender.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  mobileQuery: MediaQueryList;
  checked1: boolean = true;
  toggle : boolean = false;
  private _mobileQueryListener: () => void;

  dateStart : Date;
  dateEnd : Date;
 

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private stateService : DateSenderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  
  }

  ngOnInit() {
    this.dateStart = this.stateService.startDate;
    this.dateEnd = this.stateService.endDate;

    console.log(this.dateStart);
    console.log(this.dateEnd);
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
