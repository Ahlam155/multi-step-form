import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PlanComponent } from './components/plan/plan.component';
import { SuccessComponent } from './components/success/success.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {path: "" , redirectTo: "/info" , pathMatch: "full"},//default path
  {path:"info", component:PersonalInfoComponent},
  {path:"ons", component:AddOnsComponent},
  {path:"plan", component:PlanComponent},
  {path:"summary", component:SummaryComponent},
  {path:"success" , component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
