import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-masklist',
  templateUrl: './masklist.component.html',
  styleUrls: ['./masklist.component.scss']
})
export class MasklistComponent implements OnInit {

  assetsUrl = environment.assetsUrl;

  openClass = ['opening', 'comingsoon', 'close'];
  openStr = ['營業中', '即將休息', '休息中'];

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
  }
  setInfo(pos: any, info: any) {
    this.appStoreService.setPharmacyInfo(pos, info);
    this.appStoreService.isSideBar$.next('close');
  }
  onDistance() {
    this.appStoreService.setDistance();
  }
  onChild() {
    this.appStoreService.setChild();
  }
  onAdult() {
    this.appStoreService.setAdult();
  }
}
