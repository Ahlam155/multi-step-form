import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private router:Router,
              private formBuilder: FormBuilder,
              private sharedService:SharedService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required,Validators.minLength(11), Validators.maxLength(11)]]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  checkValidation(): void {
    this.submitted = true;

    if (this.form.invalid)
    {
      return;
    }

    this.router.navigateByUrl("/plan")
    this.sharedService.validation1=true
  }

  }
