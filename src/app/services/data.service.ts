import {Injectable} from '@angular/core';
import {Collegue} from "../models/Collegue";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private _http: HttpClient) {
    }

    private action = new Subject<Collegue>();

    get actionObs() {
        return this.action.asObservable();
    }


    rechercherParNom(nom: string): Observable<Array<string>> {

        // 1

        const HttpOptions = {
            headers: new HttpHeaders({
                "Content-type": "application/json"
            }), withCredentials: true,
        };
        // 2
        let tabMatricules: string[] = [];

        // 3 => emission de la requête
        return this._http.get<Array<string>>(URL_BACKEND.concat('/collegue?nomCollegue='.concat(nom)), HttpOptions);


    }

    recupererCollegueParMatricule(matricule: string): Observable<Collegue> {

        const HttpOptions = {
            headers: new HttpHeaders({
                "Content-type": "application/json"
            }), withCredentials: true
        };

        return this._http.get<Collegue>(URL_BACKEND.concat('/collegue/'.concat(matricule)), HttpOptions)
            .pipe(
                tap(col => this.action.next(col))
            );

    }


}
