import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { AppService } from '../app.service';

import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  assetsUrl = environment.assetsUrl;
  faSearch = faSearch;

  constructor(
    private appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {

  }
  search(){
    console.log(123)
  }

}
