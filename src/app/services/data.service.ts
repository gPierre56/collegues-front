import { Injectable } from '@angular/core';
import {CollegueMock} from "../mock/collegue.mock";
import {MatriculeMock} from "../mock/matricules.mock";
import {Collegue} from "../models/Collegue";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    return new MatriculeMock().matricules;
  }

  recupererCollegueCourant(): Collegue {
    return new CollegueMock().collegue;
  }
}
