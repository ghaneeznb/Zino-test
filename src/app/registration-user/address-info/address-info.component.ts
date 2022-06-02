import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent{

  public currentStep = 1;
  @Input() steps : any;
  @Input() addressInfo!: FormGroup;

    stateInfo: any;
    countryInfo: any;
    cityInfo: any;

  constructor(private registerService: RegistrationService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.registerService.allCountries().
    subscribe(
      data=> {
        this.countryInfo = data.Countries;
      }
    )
  }

  onChangeCountry(countryValue: any) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue: any) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }
}
