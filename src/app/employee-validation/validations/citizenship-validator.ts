import { AbstractControl, FormGroup ,  NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl } 
from '@angular/forms';
import * as moment from 'moment';
import { stringify } from 'querystring';


export function citizenshipValidator(control: AbstractControl): { [key: string]: String } | null {
  

  let controlValue: string = control.value as string;
  
  if (controlValue == "" || controlValue == null )
     return {'citizenshipValidator' : 'Citizenship cannot be empty'}
    
      
 return null;

}
