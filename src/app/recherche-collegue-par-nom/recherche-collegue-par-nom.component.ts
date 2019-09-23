import { Component, OnInit } from '@angular/core';
import {MatriculeMock} from "../mock/matricules.mock";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  affichage:Boolean;
  listeMatricules: Array<string>;

  constructor() {
    this.listeMatricules = new MatriculeMock().matricules;
  }

  afficher() {
    this.affichage = true;
  }

  ngOnInit() {
  }

}
