import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from 'src/app/models/plans';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  offer=this.sharedService.offer;
  selectedPlan:Plans={name:"",month:0,year:0};
  selectedOns:Plans[]=[];
  show:boolean=false;
  total:number=0;
  browserRefresh:boolean=false
  constructor(private sharedService:SharedService ,
              private router:Router) {
    if(sharedService.selectedPlan && sharedService.selectedOns.length!=0)
    {
    this.selectedPlan=sharedService.selectedPlan;
    this.selectedOns=sharedService.selectedOns;
    this.show=true

  }
  }

  ngOnInit(): void {
    this.browserRefresh = this.sharedService.browserRefresh;
    if(this.browserRefresh){
      this.router.navigateByUrl("/info")
    }
    if(this.show){

      if(this.offer=="Monthly"){
        this.total=this.selectedPlan.month
        this.selectedOns.map((ons)=>this.total+=ons.month)
      }
      else{
        this.total=this.selectedPlan.year
        this.selectedOns.map((ons)=>this.total+=ons.year)
      }
    }
  }

  confirm(){
    if(this.sharedService.selectedPlan && this.sharedService.selectedOns)
  {
      this.router.navigateByUrl("/success")
    }
  }
  Back(){
    this.router.navigateByUrl("/ons")
  }

}
