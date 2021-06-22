import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  tabNames: any;
  constructor(){
    this.tabNames= this.setDefaultValues();
  }

  ngOnInit(){
    this.tabNames.personalInformation = true;
  }

  setFlag(tabName: string): void{
    this.tabNames= this.setDefaultValues();
    this.tabNames[tabName] = true;
  }

  setDefaultValues(){
    return {
      personalInformation: false,
      serviceDetails: false,
      transitionDetails: false,
      sponsorDetails: false,
      permissions: false,
      termsAndConditions: false,
    }

  }
}
