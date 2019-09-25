import {Component} from '@angular/core';
import {Collegue} from "./models/Collegue";

import {DataService} from "./services/data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})


export class AppComponent {
    col: Collegue;

    constructor(private _data: DataService) {

    }


}
