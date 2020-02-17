import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AppStoreService } from '../app-store.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  faSearch = faSearch;
  faInfoCircle = faInfoCircle;
  assetsUrl = environment.assetsUrl;

  constructor(
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
  }
  onSearch(){
    this.appStoreService.setSideBar();
  }
  onMaskinfo() {
    alert('還在思考要放些什麼 再等等嘿')
  }
  onInfo() {
    alert('還在思考要放些什麼 再等等嘿2')
  }
}
