import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-buttons',
  templateUrl: './group-buttons.component.html',
  styleUrls: ['./group-buttons.component.css']
})
export class GroupButtonsComponent implements OnInit {
  @Input() back:string="";
  @Input() next:string="";
  @Input() navigate:boolean=false;
  @Input() end:boolean=false;
  @Input() content:string="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Back(){
    this.router.navigateByUrl(this.back)
  }
  Next(){
    if(this.navigate){
      this.router.navigateByUrl(this.next)
    }
  }
}
