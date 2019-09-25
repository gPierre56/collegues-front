import {Collegue} from "../models/Collegue";

export class CollegueMock {

    collegue: Collegue;

    constructor() {
        this.collegue = new Collegue();
        this.collegue.matricule = 'XXX3226';
        this.collegue.nom = 'Doe';
        this.collegue.prenom = 'John';
        this.collegue.dateDeNaissance = new Date();
        this.collegue.email = 'john-doe@gmail.com';
        this.collegue.photoUrl = 'https://www.challenges.fr/assets/img/2018/09/11/cover-r4x3w1000-5b978f41e1edf-sipa-ap22227656-000003.jpg';


    }
}
