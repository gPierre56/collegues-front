import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModifierDto} from "../dto/modifierDto";


const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class ModifierCollegueService {

  constructor(private _http : HttpClient) { }



  modifierCollegue(collegue: ModifierDto) : Observable<any> {

    const HttpOptions = {
      headers : new HttpHeaders({
        "Content-type" : "application/json"
      }), withCredentials : true,
    };
       return this._http.patch(URL_BACKEND.concat('/collegue/'.concat(collegue.matricule)), {
         "email" : collegue.email,
         "urlPhoto" : collegue.photoUrl
       }, HttpOptions);
  }
}
