import { Component } from '@angular/core';
import {Collegue} from "./models/Collegue";
import {CollegueMock} from "./mock/collegue.mock";

@Component({
  selector: 'app-root',
  template : `
      <div class = "row">
        <div class="col-3">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom>
        </div>
        
        <div class="col-9">
        <app-collegue [col] = "col"> </app-collegue>
      </div>
      
        </div>
      
  
  `,
  styles: []
})


export class AppComponent {
  col: Collegue;
  constructor() {
    this.col = new CollegueMock().collegue;
  }


}
