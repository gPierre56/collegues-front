import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreerDto} from "../dto/creerDto";
import {environment} from "../../environments/environment";
import {Collegue} from "../models/Collegue";


const URL_BACK = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CreerCollegueService {

  constructor(private _http: HttpClient) { }

  creerCollegue(collegue: CreerDto) :Observable<Collegue> {





    const HttpOptions = {
      headers : new HttpHeaders({
        "Content-type" : "application/json"
      }), withCredentials : true,
    };

    return this._http.post<Collegue>(URL_BACK.concat('/collegue'), {
      "nom" : collegue.nom,
      "prenom" : collegue.prenom,
      "email" : collegue.email,
      "dateDeNaissance" : collegue.dateDeNaissance,
      "photoUrl" : collegue.photoUrl
    }, HttpOptions);
  }
}
