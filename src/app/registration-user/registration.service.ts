import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiUlr =  "https://api.countrystatecity.in/v1/countries";

  constructor() { }
}
