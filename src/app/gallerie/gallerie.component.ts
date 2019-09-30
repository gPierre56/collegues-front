import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from "../services/photo.service";
import {PhotoDto} from "../dto/photoDto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  actionSub: Subscription;
  @Input() listePhotos: Array<PhotoDto>;

  constructor(private _photoService: PhotoService) { }

  ngOnInit() {
    this.actionSub = this._photoService.recupererToutesLesPhotos().subscribe((liste) => {
      this.listePhotos = liste;
    })
  }



}
