import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSearch, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { AppStoreService } from '../app-store.service';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  faSearch = faSearch;
  faInfoCircle = faInfoCircle;
  faHome = faHome;
  assetsUrl = environment.assetsUrl;



  constructor(
    public appStoreService: AppStoreService,
  ) { }

  ngOnInit() {
  }
  onSearch() {
    this.appStoreService.setSideBar();
  }
  onMaskinfo() {
    alert('旅工中 再等等嘿')
  }
  onNear() {
    const allPharmacyList = this.appStoreService.getAllPharmacy;
    const cityList = this.appStoreService.getCityList;

    const distList = this.appStoreService.filterStore(allPharmacyList, 2);
    const city = this.appStoreService.getCurCity(cityList, distList);

    this.appStoreService.setPharmacyList(distList);
    this.appStoreService.setGeoPolygon(city);
    this.appStoreService.city$.next(city);

  }
}
