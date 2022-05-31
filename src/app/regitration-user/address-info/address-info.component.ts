import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent{

  public currentStep = 1;
  @Input() steps : any;
  @Input() addressInfo!: FormGroup;

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, 
    CountryISO.UnitedKingdom]

    public country: Array<string> = [];
    public selectedcountry = "";

    public city: Array<string> = [];
    public selectedcity = "";

  constructor() { }
  
    // addressInfo =  new FormGroup({
    //   email: new FormControl("", [Validators.required, Validators.email]),
    //   phoneNumber: new FormControl(undefined, [Validators.required]),
    //   postalCode: new FormControl("", Validators.required),
    //   country: new FormControl("", [Validators.required]),
    //   city: new FormControl("", [Validators.required]),
    //   address: new FormControl("", [Validators.required])
    // });

    public next(): void {
      if (this.addressInfo.valid && this.currentStep !== this.steps.length) {
        this.currentStep += 1;
        return;
      }
  
      this.steps = this.steps.map((step: any) => ({ ...step }));
      this.addressInfo.markAllAsTouched();
    }
  
    public prev() {
      this.currentStep -= 1;
    }
}
