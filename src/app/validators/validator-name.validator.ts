import {UserService} from '../service/user.service';
import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export function isUserNameAvaliable(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable < ValidationErrors | null > => {
    const username = control.value;
     return userService.isUserNameAvaiable(username).pipe(
      map(isTaken => (isTaken ? {usernameTaken: true} : null)),
      catchError(() => null)
    );
  }
}
