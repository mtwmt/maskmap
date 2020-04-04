import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSearch, faInfoCircle, faHome, faList, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { AppStoreService } from '../app-store.service';
import { SearchComponent } from '../search/search.component';
import { AppService } from '../app.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  faList = faList;
  faMapMarkedAlt = faMapMarkedAlt;
  faInfoCircle = faInfoCircle;
  faHome = faHome;
  assetsUrl = environment.assetsUrl;



  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService,
  ) { }

  ngOnInit() {}
  onSearch() {
    // this.appStoreService.setSideBar();
  }
  onList() {
    this.appStoreService.isSideBar$.next('active');
  }
  onMap() {
    this.appStoreService.isSideBar$.next('close');
  }
  onMaskinfo() {
    
  }
  onNear() {
    this.appStoreService.distancePharmacyList(this.appStoreService.distanceRange);
    this.appStoreService.isSideBar$.next('open');
  }
}
