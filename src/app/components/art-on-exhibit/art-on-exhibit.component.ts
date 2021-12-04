import { Component, Input } from '@angular/core';
import { ArtDetail } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-art-on-exhibit',
  templateUrl: './art-on-exhibit.component.html',
  styleUrls: ['./art-on-exhibit.component.css']
})
export class ArtOnExhibitComponent {
  @Input() artDetails: ArtDetail[] | undefined;
  constructor() { }

}
