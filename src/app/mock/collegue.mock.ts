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
        this.collegue.photoUrl = 'https://i.guim.co.uk/img/media/efc29bac50266f2385531697d3ec582e0a333347/0_100_3000_1800/' +
            'master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3ec1342120ae8f0719bac90c6e4dd8fe';
        this.collegue.modifier = false;

    }
}
