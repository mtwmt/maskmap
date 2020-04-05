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

  list: Array<any>;
  value;
  constructor(
    private appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {

    this.appStoreService.getPharmacy$.subscribe(res => {
      this.list = res;
    });
  }
  search(e) {

    const val = this.value;

    let filterList;
    if (e.key === 'Enter' || e.type === 'click') {

      if (!val) {
        filterList = this.appStoreService.getPharmacy;
      } else {
        filterList = this.list.filter(e => e.properties.name.match(val));
      }
      if (filterList.length > 0) {
        console.log('filterList', filterList)
        this.appStoreService.getPharmacy$.next(filterList);
        this.appStoreService.clsList$.next('open');
      } else {
        alert('查無藥局');
      }
    }
  }

}
