import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})
export class DeconnexionService {

  constructor(private _http: HttpClient) { }


  deconnecter():Observable<any> {
    const HttpOption = {

      withCredentials : true
    };

    return this._http.post(URL_BACKEND.concat('/logout'),{}, HttpOption);
  }
}
