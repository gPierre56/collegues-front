import {Component, Input, OnInit} from '@angular/core';
import {Collegue} from "../models/Collegue";
import {CollegueMock} from "../mock/collegue.mock";


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue;

  constructor() {

  }
  modifier() {
    console.log('Modification du collègue');
    this.col.modifier = true;
  }

  creer() {
    console.log('Création d\'un nouveau collègue');
  }

  ngOnInit() {
  }

}
