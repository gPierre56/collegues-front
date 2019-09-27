import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Collegue} from "../models/Collegue";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";
import {ModifierDto} from "../dto/modifierDto";
import {ModifierCollegueService} from "../services/modifier-collegue.service";
import {CreerCollegueService} from "../services/creer-collegue.service";
import {CreerDto} from "../dto/creerDto";
import {UrlValidatorDirective} from "../validators/url-validator.directive";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
    selector: 'app-collegue',
    templateUrl: './collegue.component.html',
    styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

    actionSub: Subscription;
    collegueModifier: ModifierDto = new ModifierDto();
    collegueCreer: CreerDto = new CreerDto();
    modifier: boolean;
    creation: boolean;
    @Input() col: Collegue;


    constructor(private _data: DataService, private _modification: ModifierCollegueService, private  _creation: CreerCollegueService) {

    }





    modifierCollegue() {
        console.log('Modification du collègue');
        this.creation = false;
        this.modifier = true;
    }

    annulerModification() {
        console.log('Modification du collègue');
        this.modifier = false;
    }

    validerModification(): void {
        this.collegueModifier.matricule = this.col.matricule;

        this._modification.modifierCollegue(this.collegueModifier).subscribe(() => {
            this.collegueModifier = new ModifierDto();
        });
        this.modifier = false;
    }


    creer() {
        console.log('Création d\'un nouveau collègue');
        this.modifier = false;
        this.creation = true;
    }

    validerCreation(): void {

            this._creation.creerCollegue(this.collegueCreer).subscribe(() => {
                    this.collegueCreer = new CreerDto();
                    this.creation = false;
                }
            )


    }

    annulerCreation() {
        this.creation = false;
    }


    ngOnInit() {
        this.modifier = false;
        this.creation = false;
        this.actionSub = this._data.actionObs.subscribe(col => this.col = col);
    }

    ngOnDestroy(): void {
        this.actionSub.unsubscribe();
    }

}
