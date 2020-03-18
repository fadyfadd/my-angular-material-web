import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { dateOfBirthValidator } from './validations/date-of-birth-validator.ts'
import { citizenshipValidator } from './validations/citizenship-validator';

@Component({
  selector: 'app-employee-validation',
  templateUrl: './employee-validation.component.html',
  styleUrls: ['./employee-validation.component.css']
})
export class EmployeeValidation {

  dateOfBirth: FormControl = new FormControl('', [dateOfBirthValidator]);
  citizenship: any;
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
   
  }

  
  onSubmit() {

    if (this.employeeForm.valid)
      alert('submitted data');
  }

  get citizenshipF() {
    return this.employeeForm.get("citizenship");
  }

  

  reset(f) {
    //this.employeeForm.reset();
    this.dateOfBirth.reset();
    f.reset();
  }

  employeeForm: FormGroup = this.fb.group(
    {
      dateOfBirth: this.dateOfBirth,
      citizenship: new FormControl('', [citizenshipValidator])
    }
  );



}
