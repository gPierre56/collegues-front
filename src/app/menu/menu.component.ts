import { Component, OnInit } from '@angular/core';
import {DeconnexionService} from "../services/deconnexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _deconnexion: DeconnexionService, private router: Router) { }

  ngOnInit() {
  }

  deconnecter(): void{
    this._deconnexion.deconnecter().subscribe();
    this.router.navigate(['/authentification']);
  }

}
