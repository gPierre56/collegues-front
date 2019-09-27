import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbDateAdapter, NgbDateNativeAdapter, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { AuthentificationComponentComponent } from './authentification-component/authentification-component.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';



@NgModule({
  declarations: [
    AppComponent,

      CollegueComponent,

      RechercheCollegueParNomComponent,

      AuthentificationComponentComponent,

      UrlValidatorDirective,

      EmailValidatorDirective





  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule, ReactiveFormsModule

  ],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})


export class AppModule { }
