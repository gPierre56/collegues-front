import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {AuthentificationService} from "../services/authentification.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

const URL_BACKEND = environment.backendUrl;

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
      return this.authService.authentifier(login, password);
  }

  ngOnInit() {
  }



}
