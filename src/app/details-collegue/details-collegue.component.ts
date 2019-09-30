import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DataService} from "../services/data.service";
import {Collegue} from "../models/Collegue";

@Component({
    selector: 'app-details-collegue',
    templateUrl: './details-collegue.component.html',
    styleUrls: ['./details-collegue.component.css']
})
export class DetailsCollegueComponent implements OnInit {

    private col: Collegue;

    constructor(private routaActive: ActivatedRoute, private _service: DataService) {
    }

    ngOnInit() {

        this.routaActive.paramMap.subscribe((params: ParamMap) => {
            const matriculeRecupere = params.get('matricule');
            this._service.recupererCollegueParMatricule(matriculeRecupere).subscribe((col) => {
              this.col = col;
            }, () => {alert('Erreur lors de la récupération du collègue avec ce matricule.')});

        }, () => {
          alert('Erreur lors de la récupération du matricule.')
        })
    }

}
