import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {AuthentificationService} from "./authentification.service";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate{

  constructor(private router: Router, private service: AuthentificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.isLogged().pipe(
        map(() => {return true;}),
            catchError(() => {return of (this.router.parseUrl('/authentification'))}),
            tap(result => console.log('result', result)));

  }
}
