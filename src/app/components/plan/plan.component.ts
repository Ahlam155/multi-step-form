import { Location } from '@angular/common';
import { Component, ElementRef, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from 'src/app/models/plans';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  allPlans:Plans[];
  clicked:number=0;
  offer:string=this.sharedService.offer;
  browserRefresh:boolean=false

  constructor(private router:Router,
              private sharedService:SharedService)
        {
          this.allPlans=[
            {name:"Arcade" , month:9 , year:90},
            {name:"Advanced" , month:12 , year:120},
            {name:"Pro" , month:15 , year:150}

          ];
        }

  ngOnInit(): void {
    this.sharedService.selectedPlan=this.allPlans[0];
    this.browserRefresh = this.sharedService.browserRefresh;
    if(!this.browserRefresh){
      this.router.navigateByUrl("/info")
    }
  }
  switch(ele:HTMLInputElement){
    if(ele.checked)
    {
      this.sharedService.offer="Yearly";
      this.offer="Yearly";
    }

    else
    {
      this.sharedService.offer="Monthly"
      this.offer="Monthly"
    }
  }

  select(i:number,plan:Plans) {
    this.clicked = i;
    this.sharedService.selectedPlan=plan
  }

}


