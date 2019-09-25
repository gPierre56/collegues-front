import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Collegue} from "../models/Collegue";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  actionSub: Subscription;

  @Input() col: Collegue;

  constructor(private _data:DataService) {

  }


  modifierCollegue() {
    console.log('Modification du collègue');
    this.col.modifier = true;
  }

  creer() {
    console.log('Création d\'un nouveau collègue');
  }



  ngOnInit() {
    this.actionSub = this._data.actionObs.subscribe(col => this.col = col);
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }

}
