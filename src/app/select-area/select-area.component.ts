import { Component, OnInit, ElementRef } from '@angular/core';
import { AppStoreService } from '../app-store.service';

@Component({
  selector: 'app-select-area',
  templateUrl: './select-area.component.html',
  styleUrls: ['./select-area.component.scss']
})
export class SelectAreaComponent implements OnInit {

  city: any;
  area: string;

  constructor(
    private elementRef: ElementRef,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
    this.appStoreService.city$.subscribe(res => {
      this.city = res;
    });

    // console.log(123, this.elementRef)
  }
  dragStarted( e ){
    this.appStoreService.isSideBar$.next('open');
  }
  onCityChange(city: string) {
    this.city = city;
    this.appStoreService.city$.next(city);
    this.appStoreService.setPharmacyList(city);
    this.appStoreService.isSideBar$.next('open');
  }
  onAreaChange(districts?: string) {
    if (districts === '全區') {
      this.area = '';
    } else {
      this.area = districts;
    }
    this.appStoreService.setPharmacyList(this.city, this.area);
    this.appStoreService.isSideBar$.next('open');
  }
}
