import {UserService} from '../service/user.service';
import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export function isUserNameAvaliable(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors=> {
    const username = control.value;
    userService.isUserNameAvaiable(username).pipe(
      map(isTaken => (isTaken ? {usernameTaken: true} : null)),
      catchError(() => null)
    );
  }
}
