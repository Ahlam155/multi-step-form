import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from 'src/app/models/plans';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit {
  offer=this.sharedService.offer;
  isChecked:boolean=false;
  checked:number=0;
  ons:Plans[];
  selectedOns:Plans[]=[];
  navigate:boolean=false;
  browserRefresh:boolean=false;

  constructor(private sharedService:SharedService ,
              private router:Router) {
    this.ons=[
            {name:"Online service" , month:1 , year:10},
            {name:"Larger storage" , month:2 , year:20},
            {name:"Customizable Profile" , month:2 , year:20},
    ]
  }

  ngOnInit(): void {
    this.browserRefresh = this.sharedService.browserRefresh;
    if(!this.browserRefresh){
      this.router.navigateByUrl("/info")
    }
  }
  check(ele:HTMLInputElement,div:HTMLDivElement,item:Plans){

    if(ele.checked)
    {
      this.checked+=1;
      div.classList.add("active")
      this.selectedOns.push(item)
    }
    else
    {
      this.checked-=1;
      this.isChecked=false
      div.classList.remove("active")
      this.selectedOns.splice(this.sharedService.selectedOns.indexOf(item),1);
    }
    this.sharedService.selectedOns=this.selectedOns;
    
    if(this.checked > 0)
    {
      this.navigate=true
    }

    else
    {
      this.navigate=false;
    }
    }
}



