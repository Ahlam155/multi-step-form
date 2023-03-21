import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  browserRefresh:boolean=false

  constructor(private sharedService:SharedService ,
    private router:Router) { }

  ngOnInit(): void {
    this.browserRefresh = this.sharedService.browserRefresh;
    if(this.browserRefresh){
      this.router.navigateByUrl("/info")
    }
  }

}
