import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";




@Component({
  selector: 'app-authentification-component',
  templateUrl: './authentification-component.component.html',
  styleUrls: ['./authentification-component.component.css']
})


export class AuthentificationComponentComponent implements OnInit {



  constructor(private authService: AuthentificationService, private router: Router) {

  }

  authentifier(login: string, password: string) {

      return this.authService.authentifier(login, password).subscribe((data : any) => {
          this.router.navigate(['/accueil']);
      }, (error: any) => {
          console.log('erreur', error);
      });
  }

  ngOnInit() {
  }



}
