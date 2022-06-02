import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from "@progress/kendo-angular-label";
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './registration-user/personal-info/personal-info.component';
import { AddressInfoComponent } from './registration-user/address-info/address-info.component';
import { ConfirmationInfoComponent } from './registration-user/confirmation-info/confirmation-info.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationUserComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    ConfirmationInfoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule,
    BrowserAnimationsModule,
    LayoutModule,
    ButtonsModule,
    IconsModule,
    LabelModule,
    DateInputsModule,
    DropDownsModule,
    NgxIntlTelInputModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    InputsModule,
    ButtonsModule,
    MatListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
