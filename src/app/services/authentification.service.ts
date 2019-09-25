import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private action = new Subject<boolean>();

  get actionObs() {
    return this.action.asObservable();
  }

  constructor(private _http:HttpClient) {



  }
  authentifier(login: string, password: string) : Observable<any>  {

    const HttpOption = {
      headers: new HttpHeaders({
        "Content-type" : "application/json"}), withCredentials : true,
      };

      return this._http.post(URL_BACKEND.concat('/auth'), {
        "nomUtilisateur" : login,
        "motDePasse" : password
      }, HttpOption).pipe(tap(() => this.action.next(true)));
  }

}
