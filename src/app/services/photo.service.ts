import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {PhotoDto} from "../dto/photoDto";
import {tap} from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private _http: HttpClient) { }

  private action = new Subject<Array<PhotoDto>>();

  get actionObs() {
    return this.action.asObservable();
  }

  recupererToutesLesPhotos() : Observable<Array<PhotoDto>> {

    const HttpOptions = {
      headers : new HttpHeaders({
        "Content-type" : "application/json"
      }), withCredentials : true,
    };

    return this._http.get<Array<PhotoDto>>(URL_BACKEND.concat('/collegue/photos'), HttpOptions).pipe(tap(listeCollegues => this.action.next(listeCollegues)));

  }
}


