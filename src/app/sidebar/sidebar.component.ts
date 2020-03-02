import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
    // combineLatest(
    //   this.appService.fetchTaiwanCity(),
    //   this.appService.fetchPharmacy(),
    //   this.appService.featchTWGeo(),
    //   this.appStoreService.location$,
    // ).pipe(
    //   map(res => {
    //     const obj = {
    //       cityList: res[0],
    //       pharmacyList: res[1],
    //       twGeoList: res[2],
    //       userLocal: res[3]
    //     };
    //     this.appStoreService.calDistance(obj.pharmacyList, obj.userLocal);
    //     return obj;
    //   })
    // ).subscribe(res => {

    //   this.cityList = res.cityList;
    //   this.distList = this.appStoreService.filterPharmacyList(res.pharmacyList, 2);
    //   this.city = this.appStoreService.getCurCity(res.cityList, this.distList);
    //   this.onCityChange(this.city);
    //   this.appStoreService.setGeoPolygon(this.city);
    // });

    // this.appStoreService.getCalMask$.subscribe(res => {
    //   this.childTotal = res.childTotal;
    //   this.adultTotal = res.adultTotal;
    // });

    this.appStoreService.city$.subscribe(res => {
      this.city = res;
    });
  }

  onCityChange(city: string) {
    this.city = city;
    console.log('changeCity', city)
    this.appStoreService.city$.next(city);
    this.appStoreService.setPharmacyList(city);
  }
  onAreaChange(districts?: string) {
    if (districts === '全區') {
      this.area = '';
    } else {
      this.area = districts;
    }
    this.appStoreService.setPharmacyList(this.city, this.area);
    console.log('districts', districts)

    // this.appStoreService.setLocal(this.city, this.area);
  }
  // onMask(str: string) {
  //   this.mask = str;
  //   this.appStoreService.setMask(str);
  // }
  onSwitch() {
    // this.appStoreService.setSideBar();
  }
}
