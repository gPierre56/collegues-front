import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
const URL_BACKEND = environment.backendUrl;
@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator{

  constructor(private _http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    const HttpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }), withCredentials: true,
    };

    return this._http.get(URL_BACKEND.concat("/collegue?email=").concat(control.value), HttpOptions).pipe(catchError(() => of( {emailInvalide : true})));
}

}
