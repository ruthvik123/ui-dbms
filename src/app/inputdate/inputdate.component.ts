import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputdate',
  templateUrl: './inputdate.component.html',
  styleUrls: ['./inputdate.component.css']
})
export class InputdateComponent implements OnInit {
startDate : Date ;
endDate : Date ;
errorMsg : String = "";

  constructor( private router: Router) { }

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
  this.router.navigate(['/dashboard']);
}
  }
   }

}
