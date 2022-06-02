import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent{

  public currentStep = 0;
  @Input() steps : any;
  @Input() public personalInfo!: FormGroup;

  constructor() { }

  // personalInfo = new FormGroup({
  //   gender: new FormControl(null, [Validators.required]),
  //   initials:new FormControl("", Validators.required),
  //   firstName: new FormControl("", Validators.required),
  //   lastName: new FormControl("", [Validators.required]),
  //   dateOfBirth: new FormControl(new Date(), [Validators.required,]),  // Validators.pattern("dd/MM/yyyy")
  //   nationality: new FormControl("", [Validators.required]),
  //   socialSecurityNumber: new FormControl(0, [Validators.required, Validators.pattern("[0-9 ]")]),
  // });

  public next(): void {
    if (this.personalInfo.valid && this.currentStep !== this.steps.length) {
      this.currentStep += 1;
      return;
    }

    this.steps = this.steps.map((step: any) => ({ ...step }));
    this.personalInfo.markAllAsTouched();
  }

}
