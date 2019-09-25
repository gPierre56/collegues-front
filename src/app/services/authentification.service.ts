import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private _http:HttpClient) {



  }
  authentifier(login: string, password: string) : void  {

    const HttpOption = {
      headers: new HttpHeaders({
        "Content-type" : "application/json"}), withCredentials : true,
      };

      this._http.post(URL_BACKEND.concat('/auth'), {
        "nomUtilisateur" : login,
        "motDePasse" : password
      }, HttpOption).subscribe((data : any) => {
        console.log(data);
      }, (error: any) => {
        console.log('erreur', error);
      });
  }

}
