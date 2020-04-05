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
    this.appStoreService.clsList$.next('active');
    this.appStoreService.clsInfo$.next('close');
    this.appStoreService.isNear$.next(false);
  }
  onMap() {
    this.appStoreService.clsList$.next('close');
    this.appStoreService.clsInfo$.next('close');
  }
  onMaskinfo() {
    this.appStoreService.clsInfo$.next('open');
  }
  onNear() {
    this.appStoreService.distancePharmacyList(this.appStoreService.distanceRange);
    this.appStoreService.clsList$.next('open');
    this.appStoreService.clsInfo$.next('close');
    this.appStoreService.isNear$.next(true);
  }
}
