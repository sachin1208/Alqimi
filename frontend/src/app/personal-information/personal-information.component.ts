import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  countries: any = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Austrian Empire',
    'Azerbaijan'
  ]

  userForm: any;
  constructor(private fb: FormBuilder) {
    this.userForm = this.setDefaultValues();
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty("--bg-color", "#ced4da");
  }

  consoleFormValue(): void {
    if(!this.userForm.valid){
      window.scrollTo(0, 0);
      document.documentElement.style.setProperty("--bg-color", "red");
      alert('Please enter the required fields.')
      return;
    }
    alert('Form submitted successfully.')
    console.log(this.userForm.value);
  }

  resetFormValues(): void {
    this.userForm = this.setDefaultValues();
    window.scrollTo(0, 0);
  }

  setDefaultValues(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      mname: [''],
      nname: [''],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      suffix: [''],
      orientation: [''],
      lname: ['', [Validators.required]]
    })
  }
}
