import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";




@Component({
  selector: 'app-authentification-component',
  templateUrl: './authentification-component.component.html',
  styleUrls: ['./authentification-component.component.css']
})


export class AuthentificationComponentComponent implements OnInit {



  constructor(private authService: AuthentificationService) {

  }

  authentifier(login: string, password: string) {
      console.log(login);
      console.log(password);
      return this.authService.authentifier(login, password).subscribe((data : any) => {
          console.log(data);
      }, (error: any) => {
          console.log('erreur', error);
      });
  }

  ngOnInit() {
  }



}
