import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  city: string;
  city$: BehaviorSubject<any> = new BehaviorSubject(this.city);

  getGeoList: any;
  getGeoList$: BehaviorSubject<any> = new BehaviorSubject(this.getGeoList);

  getGeoPolygon: any;
  getGeoPolygon$: BehaviorSubject<any> = new BehaviorSubject(this.getGeoPolygon);

  getCityList: any;
  getCityList$: BehaviorSubject<any> = new BehaviorSubject(this.getCityList);

  getAreaList: any;
  getAreaList$: BehaviorSubject<any> = new BehaviorSubject(this.getAreaList);

  getAllPharmacy: Array<any>;
  getAllPharmacy$: BehaviorSubject<any> = new BehaviorSubject(this.getAllPharmacy);

  getPharmacy: any;
  getPharmacy$: Subject<any> = new Subject();

  getCurInfo$: Subject<any> = new Subject();
  getCalMask$: Subject<any> = new Subject();

  isSideBar = true;
  isSideBar$: BehaviorSubject<any> = new BehaviorSubject(this.isSideBar);

  location: any;
  location$: Subject<any> = new Subject();

  constructor() { }

  setLocal(city: string, area?: string) {
    this.city = city;
    this.city$.next(city);
    this.setPharmacyList(this.getAllPharmacy, city, area);
    this.setGeoPolygon(city);
  }

  setAreaList(city: string) {
    this.getAreaList = this.getCityList.filter((e: any) => e.Name === city);
    this.getAreaList$.next(this.getAreaList[0].Districts);
  }
  setGeoPolygon(city?: string) {
    this.getGeoPolygon = this.getGeoList.filter((e: any) => e.properties.name !== city);
    const localCity = this.getCityList.filter((e: any) => e.Name === city);
    this.getGeoPolygon$.next({
      localCityPos: localCity,
      localGeo: this.getGeoPolygon
    });
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  featchUserlocal() {
    const success = (position) => {
      this.location = position.coords;
      this.location$.next(position.coords);
    }
    const error = () => {
      this.location$.next({
        latitude: 25.0032999,
        longitude: 121.5540404
      });
      alert('您尚未定位');
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('google location error');

    }


  }
  allGeoList(ary: Array<any>) {
    this.getGeoList = ary;
    this.getGeoList$.next(ary);
  }
  allCityList(ary: Array<any>) {
    this.getCityList = ary;
    this.getCityList$.next(this.getCityList);
  }
  allPharmacyList(ary?: Array<any>) {
    this.getAllPharmacy = ary;
    this.getAllPharmacy$.next(ary);
  }


  setPharmacyList(list: Array<any>, city?: string, area?: string) {

    const newList = list.filter(e => {
      if (!city && !area) {
        return e;
      } else {
        if (e.properties.address.match('臺')) {
          e.properties.address = e.properties.address.replace('臺', '台')
        }
        if (!area) {
          area = '';
        }
        return e.properties.address.match(city + area);
      }

    }).sort((a, b) => {
      return (+a.properties.mask_adult) + (+a.properties.mask_child) < (+b.properties.mask_adult) + (+b.properties.mask_child) ? 1 : -1;
    });
    this.getPharmacy = newList;
    this.getPharmacy$.next(newList);
    this.setCalMask(newList);
  }
  setPharmacyInfo(pos, info) {
    const newInfo = { ...info, coordinates: pos.coordinates };
    this.getCurInfo$.next(newInfo);
  }
  // ===============
  setMask(str: string) {
    let newList: any = [];
    if (str === 'child') {
      newList = this.getPharmacy.filter(e => e.properties.mask_child > 0)
        .sort((a: any, b: any) => {
          return (+a.properties.mask_child) < + (+b.properties.mask_child) ? 1 : -1;
        });
    } else if (str === 'adult') {
      newList = this.getPharmacy.filter(e => e.properties.mask_adult > 0)
        .sort((a: any, b: any) => {
          return (+a.properties.mask_adult) < (+b.properties.mask_adult) ? 1 : -1;
        });
    } else if (str === 'both') {
      newList = this.getPharmacy.filter(e => e.properties.mask_child > 0 && e.properties.mask_adult > 0)
        .sort((a: any, b: any) => {
          return (+a.properties.mask_adult) + (+a.properties.mask_child) < (+b.properties.mask_adult) + (+b.properties.mask_child) ? 1 : -1;
        });
    } else if (str === 'all') {
      newList = this.getPharmacy.filter(e => e.properties.mask_child > 0 || e.properties.mask_adult > 0)
        .sort((a: any, b: any) => {
          return (+a.properties.mask_adult) + (+a.properties.mask_child) < (+b.properties.mask_adult) + (+b.properties.mask_child) ? 1 : -1;
        });
    }
    this.getPharmacy$.next(newList);
  }

  setCalMask(list: Array<any>) {
    let childTotal = 0;
    let adultTotal = 0;

    list.map(e => {
      childTotal += e.properties.mask_child;
      adultTotal += e.properties.mask_adult;

    });
    this.getCalMask$.next({ childTotal, adultTotal });
  }


  setSideBar() {
    this.isSideBar = !this.isSideBar;
    this.isSideBar$.next(this.isSideBar);
  }


  // 計算距離
  calDistance(list: Array<any>, location) {
    const userLatitude = location.latitude;
    const userLongitude = location.longitude;
    list.map(e => {
      const storeLatitude = e.geometry.coordinates[0];
      const storeLongitude = e.geometry.coordinates[1];

      const a = storeLongitude - userLongitude;
      const b = storeLatitude - userLatitude;
      const distance = Math.sqrt(a * a + b * b) * 111;
      e.geometry.coordinates[2] = distance;
    });
  }
  // 顯示距離內的藥局
  filterStore(list: Array<any>, distance: number) {
    let showMask = [];

    showMask = list.filter(e => {
      return e.geometry.coordinates[2] <= distance;
    })
    return showMask;
  }
  // 由近到遠排序
  // sortStore() {
  //   this.vShowMask.sort(function (x, y) {
  //     return x.geometry.coordinates[2] - y.geometry.coordinates[2];
  //   });
  // },


  // 找出當地城市
  getCurCity(citylist: Array<any>, list: Array<any>) {
    const cnt = {};
    let max = 0;
    let curCity: any;
    citylist.map((city: any) => {
      list.map(e => {
        const address = e.properties.address;
        if (address.indexOf(city.Name) >= 0) {
          cnt[city.Name] = cnt[city.Name] || 0;
          cnt[city.Name]++;
        }
      })
    });
    for (const i in cnt) {
      if (cnt[i] > max) {
        max = cnt[i];
        this.city = i;
        // this.setLocal(i);
        curCity = i;
        this.city$.next(i);
      }
    }
    return curCity;
  }
}
