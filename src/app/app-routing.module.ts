import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputdateComponent } from './inputdate/inputdate.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'' , redirectTo:'/input', pathMatch:'full' }, 
{path:'input' , component:InputdateComponent },
{path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
