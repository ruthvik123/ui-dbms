import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {DashboardComponent} from '../dashboard/dashboard.component';
import {DateSenderService} from '../date-sender.service';

@Component({
  selector: 'app-inputdate',
  templateUrl: './inputdate.component.html',
  styleUrls: ['./inputdate.component.css']
})
export class InputdateComponent implements OnInit {
startDate : Date ;
endDate : Date ;
errorMsg : String = "";

  constructor( private router: Router, private stateService : DateSenderService) { }

  ngOnInit() {
  
  }

   validator (a,b)  {
    console.log(a);
    console.log(b);
if(a==undefined || b==undefined || (a==undefined && b==undefined)){
  this.errorMsg = "please enter dates";
}
else{
if(a > b){
this.errorMsg = "enter correct dates"

}
else{
  this.stateService.startDate = this.startDate;
  this.stateService.endDate = this.endDate;
  this.router.navigate(['/dashboard']);
}
  }
   }

}
