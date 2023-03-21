import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PlanComponent } from './components/plan/plan.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { GroupButtonsComponent } from './components/shared components/group-buttons/group-buttons.component';
import { HeadingComponent } from './components/shared components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLinksComponent,
    PersonalInfoComponent,
    PlanComponent,
    AddOnsComponent,
    SummaryComponent,
    SuccessComponent,
    GroupButtonsComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
