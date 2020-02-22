import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { AppService } from '../app.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSearch = faSearch;
  assetsUrl = environment.assetsUrl;

  cityList: Array<any>;

  city: any;
  area: string;

  pharmacy: Array<any>;

  mask = 'all';

  childTotal: number;
  adultTotal: number;

  distList: Array<any>;
  constructor(
    private appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
    combineLatest(
      this.appService.fetchTaiwanCity(),
      this.appService.fetchPharmacy(),
      this.appService.featchTWGeo(),
      this.appStoreService.location$,
    ).pipe(
      map(res => {
        const obj = {
          cityList: res[0],
          pharmacyList: res[1],
          twGeoList: res[2],
          userLocal: res[3]
        };
        this.appStoreService.calDistance(obj.pharmacyList, obj.userLocal);
        return obj;
      })
    ).subscribe(res => {

      this.cityList = res.cityList;
      this.distList = this.appStoreService.filterStore(res.pharmacyList, 2);
      this.city = this.appStoreService.getCurCity(res.cityList, this.distList);
      this.onCityChange(this.city);
      this.appStoreService.setGeoPolygon(this.city);
    });

    this.appStoreService.getCalMask$.subscribe(res => {
      this.childTotal = res.childTotal;
      this.adultTotal = res.adultTotal;
    });

    this.appStoreService.city$.subscribe(  res => {
      this.city = res;
    });

  }



  onCityChange(event: string) {
    this.city = event;
    this.appStoreService.setLocal(this.city);
    this.appStoreService.setAreaList(event);
  }
  onAreaChange(event?: string) {
    if (event === '全區') {
      this.area = '';
    } else {
      this.area = event;
    }
    this.appStoreService.setLocal(this.city, this.area);
  }
  onMask(str: string) {
    this.mask = str;
    this.appStoreService.setMask(str);
  }
  onSwitch() {
    this.appStoreService.setSideBar();
  }
  // getNear() {
  //   this.city = this.appStoreService.getCurCity(this.cityList, this.distList);
  //   this.appStoreService.setPharmacyList(this.distList);
  //   this.appStoreService.setGeoPolygon(this.city);
  // }
}
