import { Component, OnInit } from '@angular/core';
import { RootJson } from './interfaces/interfaces';
import { LocalDataReadService } from './services/local.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: RootJson | undefined;
  constructor(private localDataService: LocalDataReadService) { }

  ngOnInit() {
    this.localDataService.getJSON().subscribe(data => {
      this.data = data;
    });
  }

}
