import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main-links',
  templateUrl: './main-links.component.html',
  styleUrls: ['./main-links.component.css']
})
export class MainLinksComponent implements OnInit {
page=this.sharedService.page
validation:boolean=this.sharedService.validation1
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
