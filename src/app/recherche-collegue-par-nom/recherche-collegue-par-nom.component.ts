import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatriculeMock} from "../mock/matricules.mock";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
    ngOnInit() {

    }

tabMatricules: Array<string> = [];
erreur: Boolean;



  constructor(private _data: DataService) {

  }

  rechercherParNom(nom: string):void  {
    this._data.rechercherParNom(nom).subscribe((matricule) => this.tabMatricules = matricule);

  }

  //afficherCollegueParMatricule(matricule: string) {
    //this._data.recupererCollegueParMatricule(matricule).subscribe((collegue) => this.col = collegue);
  //}

  afficherCollegueParMatricule(matricule: string) :boolean {
    this._data.recupererCollegueParMatricule(matricule).subscribe(() =>{}, () => {
      alert('Erreur lors de la récupération des informations du collègue.');
    });
    return false;
  }









}
