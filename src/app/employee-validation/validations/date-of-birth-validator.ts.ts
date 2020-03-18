import { AbstractControl, FormGroup ,  NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl } 
from '@angular/forms';
import * as moment from 'moment';
import { stringify } from 'querystring';


export function dateOfBirthValidator(control: AbstractControl): { [key: string]: String } | null {
  

  let controlValue: string = control.value as string;
  
  if (controlValue == "" || controlValue == null )
     return {'dateOfBirthValidator' : 'Date of Birth cannot be empty'}

     let dte:moment.Moment = moment(controlValue,"YYYY-MM-DD")
     let dte1:moment.Moment = moment();

     if (!dte.isValid)
        return {'dateOfBirthValidator' : 'Invalid Date'}
         
        if (    dte1.diff(dte , 'years') < 18 || dte1.diff(dte , 'years') > 64 )
        {
           return {'dateOfBirthValidator' : 'Date of Birth should range Between 18 and 64'}
        }

 
      
 return null;

}
