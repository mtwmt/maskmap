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
    this.appStoreService.isList$.next('active');
    this.appStoreService.isInfo$.next('close');
  }
  onMap() {
    this.appStoreService.isList$.next('close');
    this.appStoreService.isInfo$.next('close');
  }
  onMaskinfo() {
    this.appStoreService.isInfo$.next('open');
  }
  onNear() {
    this.appStoreService.distancePharmacyList(this.appStoreService.distanceRange);
    this.appStoreService.isList$.next('open');
    this.appStoreService.isInfo$.next('close');
  }
}
