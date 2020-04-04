import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  nowHour = new Date().getHours();
  getWeeklyDay = new Date().getDay(); // 得到星期幾
  hoursLimit = [8, 12, 17, 22]; // 上午 下午 晚上分界
  iHour = -1; // hoursLimit idx

  distanceRange = 2;

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
  // getCalMask$: Subject<any> = new Subject();

  isSideBar = 'close';
  isSideBar$: BehaviorSubject<any> = new BehaviorSubject(this.isSideBar);

  location: any;
  location$: Subject<any> = new Subject();

  constructor() { }

  allCityList(ary: Array<any>) {
    this.getCityList = ary;
    this.getCityList$.next(this.getCityList);
  }
  allGeoList(ary: Array<any>) {
    this.getGeoList = ary;
    this.getGeoList$.next(ary);
  }

  allPharmacyList(ary?: Array<any>) {
    this.getAllPharmacy = ary;
    this.getAllPharmacy$.next(ary);
  }

  setAreaList(city: string = this.city) {
    this.getAreaList = this.getCityList.filter((e: any) => e.Name === city);
    this.getAreaList$.next(this.getAreaList[0].Districts);
  }


  // 顯示縣市區域的藥局
  setPharmacyList(city: string = this.city, area?: string, list: Array<any> = this.getAllPharmacy) {
    const newList = list.filter(e => {
      if (!city && !area) {
        return e;
      } else {
        if (!area) {
          area = '';
        }
        return e.properties.address.match(city + area);
      }
    });

    this.getPharmacy = newList;
    this.getPharmacy$.next(newList);
    this.setAreaList(city);
    this.setGeoPolygon(city);
  }

  // 顯示距離內的藥局
  distancePharmacyList(distance: number, list: Array<any> = this.getAllPharmacy) {
    const newList = list.filter(e => {
      return e.geometry.coordinates[2] <= distance;
    });
    this.getPharmacy = this.sortPharmacyList(newList);
    this.getPharmacy$.next(this.getPharmacy);
    this.getCurCity(this.getCityList, this.getPharmacy);

    console.log('distance', distance, newList)

    if (!newList.length) {
      this.distanceRange += 1;
      this.distancePharmacyList(this.distanceRange);
    }
  }

  setGeoPolygon(city?: string) {
    this.getGeoPolygon = this.getGeoList.filter((e: any) => e.properties.name !== city);
    const localCity = this.getCityList.filter((e: any) => e.Name === city);
    this.getGeoPolygon$.next({
      localCityPos: localCity,
      localGeo: this.getGeoPolygon
    });
  }


  setPharmacyInfo(pos, info) {
    const newInfo = { ...info, coordinates: [pos.coordinates[0], pos.coordinates[1]] };
    this.getCurInfo$.next(newInfo);
  }

  // 距離排序
  setDistance(list: Array<any> = this.getPharmacy) {
    list.sort((a: any, b: any) => a.geometry.coordinates[2] > b.geometry.coordinates[2] ? 1 : -1);
  }
  // 兒童排序
  setChild(list: Array<any> = this.getPharmacy) {
    list.sort((a: any, b: any) => a.properties.mask_child < b.properties.mask_child ? 1 : -1);
  }
  // 成人排序
  setAdult(list: Array<any> = this.getPharmacy) {
    list.sort((a: any, b: any) => a.properties.mask_adult < b.properties.mask_adult ? 1 : -1);
  }

  // 計算距離
  calDistance(list: Array<any>, location) {
    const EARTH_RADIUS = 6378.137;

    const userLatitude = location.latitude;
    const userLongitude = location.longitude;
    list.map(e => {
      const storeLatitude = e.geometry.coordinates[0];
      const storeLongitude = e.geometry.coordinates[1];

      const dLat = (storeLongitude - userLongitude) * Math.PI / 180;
      const dLon = (storeLatitude - userLatitude) * Math.PI / 180;

      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(userLatitude * Math.PI / 180) * Math.cos(storeLatitude * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = EARTH_RADIUS * c;

      if (d > 1) {
        e.properties.distance = d.toFixed(2) + 'km';
      } else if (d <= 1) {
        e.properties.distance = Math.round(d * 1000) + 'm';
      }

      e.geometry.coordinates[2] = d;
    });
  }

  // 由近到遠排序
  sortPharmacyList(list: Array<any>) {
    list.sort((x, y) => {
      return x.geometry.coordinates[2] - y.geometry.coordinates[2];
    });
    return list;
  }


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
        curCity = i;
        this.city = i;
        this.city$.next(i);
        this.setGeoPolygon(i);
        this.setAreaList(i);
      }
    }
  }
  getOpenTime(time) {
    this.getIHour();


    const openTimeIdx = this.getWeeklyDay - 1 + this.iHour * 7;
    const openTime_now = time[openTimeIdx];
    const openTime_nextH = time[openTimeIdx + 1];

    if (this.iHour === -1) {
      return 2;
    }
    if (openTime_now === 'Y') {
      // rest
      return 2;
    } else {
      // now open , to tell next hour
      return openTime_nextH === 'N' ? 0 : 1;
    }

  }
  // 得到 iHour
  getIHour() {
    for (const keyH in this.hoursLimit) {
      if (this.nowHour - this.hoursLimit[keyH] < 0) {
        // if (9 - this.vHours[keyH] < 0) {
        this.iHour = +keyH - 1;
        break;
      }
    }
  }
}
