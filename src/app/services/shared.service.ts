import { Injectable } from '@angular/core';
import { Plans } from '../models/plans';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  offer:string="Yearly"
  selectedPlan!: Plans;
  selectedOns:Plans[]=[];
  page:number=1;
  subscription: Subscription;
  browserRefresh:boolean=false;
  validation1:boolean=false;
  validation2:boolean=false;
  validation3:boolean=false;
  validation4:boolean=false;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !router.navigated;
      }
  });
  }
}
