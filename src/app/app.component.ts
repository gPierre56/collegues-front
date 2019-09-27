import {Component, OnDestroy, OnInit} from '@angular/core';
import {Collegue} from "./models/Collegue";

import {DataService} from "./services/data.service";
import {AuthentificationService} from "./services/authentification.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})


export class AppComponent implements OnInit, OnDestroy{

    actionSub: Subscription;
    logged = false;
    constructor(private _authentification: AuthentificationService) {

    }

    ngOnInit(): void {
        this.actionSub = this._authentification.actionObs.subscribe(authenticated => this.logged = authenticated)
    }

    ngOnDestroy(): void {
        this.actionSub.unsubscribe();
    }




}
