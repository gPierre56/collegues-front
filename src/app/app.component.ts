import { Component } from '@angular/core';
import {Collegue} from "./models/Collegue";
import {CollegueMock} from "./mock/collegue.mock";

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styles: []
})


export class AppComponent {
  col: Collegue;
  constructor() {
    this.col = new CollegueMock().collegue;
  }


}
