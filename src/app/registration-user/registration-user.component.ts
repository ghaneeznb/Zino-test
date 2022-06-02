import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent{

  public currentStep = 0;
  formDetails!: FormGroup;

  public steps = [
    { 
      label: "Personal Info",
      isValid: this.isStepValid
    },
    { label: "Address Info",
      isValid: this.isStepValid
    },
    {
      label: "Confirmation",
    },
  ];

  constructor() {
  }

  public form = new FormGroup({
    personalInfo: new FormGroup({
      gender: new FormControl(null, [Validators.required]),
      initials:new FormControl("", [Validators.required, Validators.maxLength(1)]),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl(new Date(), [Validators.required,]),  // Validators.pattern("dd/MM/yyyy")
      nationality: new FormControl("", [Validators.required]),
      socialSecurityNumber: new FormControl(0, Validators.required),
    }),
    addressInfo: new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl("",[ Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      postalCode: new FormControl("", Validators.required),
      // country: new FormControl("", [Validators.required]),
      // state: new FormControl("", [Validators.required]),
      // city: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    }),
  });

  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  isStepValid(index: number): boolean {
    return this.getGroupAt(index).valid || this.currentGroup.untouched;
  }

 next(): void {
    if (this.currentGroup.valid && this.currentStep !== this.steps.length) {
      this.currentStep += 1;
      return;
    }
    this.currentGroup.markAllAsTouched();
  }

  submitForm(){
    this.formDetails = this.form.value;
  }

 prev() {
    this.currentStep -= 1;
  }

getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.form.controls).map(groupName =>
      this.form.get(groupName)
    ) as FormGroup[];
    return groups[index];
  }

}
