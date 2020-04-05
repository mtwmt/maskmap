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
  weekDay = new Date().getDay();
  buyDate: number;
  buyStr= ['單號', '雙號', '不限制'];

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
    if (this.weekDay === 0) {
      this.buyDate = 2;
    } else if (this.weekDay % 2 === 1) {
      this.buyDate = 1;
    } else if (this.weekDay % 2 === 0) {
      this.buyDate = 0;
    }
  }
  setInfo(pos: any, info: any) {
    this.appStoreService.setPharmacyInfo(pos, info);
    this.appStoreService.clsList$.next('close');
  }
  onDistance() {
    this.appStoreService.setDistance();
  }
  setDistance(e: any) {
    if (e.value < this.appStoreService.distanceRange) {
      e.value = this.appStoreService.distanceRange;
    }
    this.appStoreService.distancePharmacyList(e.value);
  }
  onChild() {
    this.appStoreService.setChild();
  }
  onAdult() {
    this.appStoreService.setAdult();
  }
}
