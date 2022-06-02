import { ThisReceiver } from '@angular/compiler';
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

    country= [];
    public selectedcountry = "";

    city= [];
    public selectedcity = "";

  constructor() { }

  ngOnInit(): void {
    this.country = 
  }

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
