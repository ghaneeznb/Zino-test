import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationUserComponent } from './regitration-user/registration-user.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from "@progress/kendo-angular-label";
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './regitration-user/personal-info/personal-info.component';
import { AddressInfoComponent } from './regitration-user/address-info/address-info.component';
import { ConfirmationInfoComponent } from './regitration-user/confirmation-info/confirmation-info.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    RegistrationUserComponent,
    HomeComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    ConfirmationInfoComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }