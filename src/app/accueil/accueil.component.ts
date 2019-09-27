import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {AuthentificationService} from "../services/authentification.service";
import {Subscription} from "rxjs";
import {Collegue} from "../models/Collegue";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {


  col: Collegue;

  constructor(private _data: DataService) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

}
