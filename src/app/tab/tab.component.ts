import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSearch, faInfoCircle, faHome, faList, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { AppStoreService } from '../app-store.service';
import { SearchComponent } from '../search/search.component';


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
    alert('施工中 再等等嘿')
  }
  onNear() {
    this.appStoreService.distancePharmacyList(2);
    this.appStoreService.isSideBar$.next('open');
  }
}
