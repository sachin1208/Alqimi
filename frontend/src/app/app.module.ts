import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { TransitionDetailsComponent } from './transition-details/transition-details.component';
import { SponsorDetailsComponent } from './sponsor-details/sponsor-details.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    ServiceDetailsComponent,
    TransitionDetailsComponent,
    SponsorDetailsComponent,
    PermissionsComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
