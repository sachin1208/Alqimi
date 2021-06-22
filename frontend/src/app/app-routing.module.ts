import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { SponsorDetailsComponent } from './sponsor-details/sponsor-details.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TransitionDetailsComponent } from './transition-details/transition-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/personal-information', pathMatch: 'full'},
  {path:'personal-information', component:PersonalInformationComponent},
  {path:'service-details', component:ServiceDetailsComponent},
  {path:'transition-details', component:TransitionDetailsComponent},
  {path:'sponsor-details', component:SponsorDetailsComponent},
  {path:'permissions', component:PermissionsComponent},
  {path:'terms-and-conditions', component:TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
