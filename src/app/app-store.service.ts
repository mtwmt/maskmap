import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  city: string;
  city$: BehaviorSubject<any> = new BehaviorSubject(this.city);


  getCityList: any;
  getCityList$: BehaviorSubject<any> = new BehaviorSubject(this.getCityList);

  getAreaList: any;
  getAreaList$: BehaviorSubject<any> = new BehaviorSubject(this.getAreaList);

  getAllPharmacy: Array<any>;

  getPharmacy: any;
  getPharmacy$: Subject<any> = new Subject();

  getCurInfo$: Subject<any> = new Subject();
  getCalMask$: Subject<any> = new Subject();

  isSideBar = true;
  isSideBar$: BehaviorSubject<any> = new BehaviorSubject(this.isSideBar);

  constructor() { }

  setLocal(city: string, area?: string) {
    this.city = city;
    this.city$.next(city);
    this.setPharmacyList(city, area)
  }
  setCityList(ary: Array<any>) {
    this.getCityList = ary;
    this.getCityList$.next(this.getCityList);
  }
  setAreaList(city: string) {
    this.getAreaList = this.getCityList.filter(e => e.Name === city);
    this.getAreaList$.next(this.getAreaList[0].Districts);
  }
  setPharmacy(ary: Array<any>) {
    this.getAllPharmacy = ary;
  }
  setPharmacyList(city: string, area?: string) {

    const newList = this.getAllPharmacy.filter(e => {
      if (e.properties.address.match('臺')) {
        e.properties.address = e.properties.address.replace('臺', '台')
      }
      if (!area) {
        area = '';
      }
      return e.properties.address.match(city + area);
    });
    this.getPharmacy = newList;
    this.getPharmacy$.next(newList);
    this.setCalMask(newList);
  }
  setPharmacyInfo(pos, info) {
    const newInfo = { ...info, coordinates: pos.coordinates };
    this.getCurInfo$.next(newInfo);
  }

  setMask(str: string) {
    let newList: any = [];
    if (str === 'child') {
      newList = this.getPharmacy.filter(e => e.properties.mask_child > 0);
    } else if (str === 'adult') {
      newList = this.getPharmacy.filter(e => e.properties.mask_adult > 0);
    } else {
      newList = this.getPharmacy.filter(e => e.properties.mask_child > 0 || e.properties.mask_adult > 0);
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
}
