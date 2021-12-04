import { Component, Input } from '@angular/core';
import { ArtDetail, NationsFeatured } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-art-by-nation-only',
  templateUrl: './art-by-nation-only.component.html',
  styleUrls: ['./art-by-nation-only.component.css']
})
export class ArtByNationOnlyComponent {
  @Input() artDetails: ArtDetail[] | undefined;
  @Input() featuredNations: NationsFeatured[] | undefined;
  nation = 'French';

  constructor() { }

  get artDetailsFiltered() {
    return this.artDetails?.filter(artDetail => artDetail.nation === this.nation);
  }


}
