import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, debounceTime } from 'rxjs/operators';
import { AppStoreService } from './app-store.service';
import { environment } from 'src/environments/environment';
import { interval, timer } from 'rxjs';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  assetsUrl = environment.assetsUrl;
  token = environment.token;

  url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

  constructor(
    private httpClient: HttpClient,
    private appStoreService: AppStoreService
  ) { }


  fetchTaiwanCity() {
    return this.httpClient.get<any>(`${this.assetsUrl}/counties.json`)
      .pipe(
        map(res => {
          res.sort((a, b) => a.Sort - b.Sort);
          res.map((e: any) => {
            e.Districts.sort((a, b) => a.Sort - b.Sort);
          });
          return res;
        }),
        tap(res => {
          console.log( 'fetchTaiwanCity',res )
          this.appStoreService.allCityList(res);
        })
      )
  }

  fetchPharmacy() {
    return this.httpClient.get<any>(this.url)
      .pipe(
        map(res => {
          res.features.map(e => {
            e.geometry.coordinates = e.geometry.coordinates.reverse();
            e.properties.phone = e.properties.phone.replace(/\s*/g, '');
            if (e.properties.address.match('臺')) {
              e.properties.address = e.properties.address.replace('臺', '台')
            }
          });

          return res.features.filter(e => e.properties.mask_adult > 0 || e.properties.mask_child > 0);
        }),
        tap((res: any) => {

          this.appStoreService.allPharmacyList(res);
        }),
      );
  }

  featchTWGeo() {
    return this.httpClient.get<any>(`${this.assetsUrl}/tw-county.geojson`)
      .pipe(
        map(res => {
          return res.features;
        }),
        tap(res => {
          this.appStoreService.allGeoList(res);
        })
      );
  }
}
