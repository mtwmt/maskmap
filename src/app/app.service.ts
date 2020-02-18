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


  fetchTaiwanCity(city?: string) {
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
          this.appStoreService.setCityList(res);
        })
      )
  }

  fetchPharmacy(area?: string) {
    return this.httpClient.get<any>(this.url)
      .pipe(
        map(res => {
          res.features.map(e => {
            e.geometry.coordinates = e.geometry.coordinates.reverse();
            e.properties.phone = e.properties.phone.replace(/\s*/g, '');
          })
          return res.features.filter(e => e.properties.mask_adult > 0 || e.properties.mask_child > 0);
        }),
        tap((res: any) => {
          this.appStoreService.setPharmacy(res);
        }),
      )
  }

  fetchlocal() {
    const token = this.token;
    const key = 'AIzaSyBGd0MP4HMs0p6dQ_xV6gt-5XBkZc4jmD8';
    // const location = [-73.989, 40.733];
    const location = [24.953750499999998, 121.34356229999999];

    return this.httpClient.get<any>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.join(',')}.json?routing=true&access_token=${token}`
    )
  }

  featchTWGeo(city?: string) {
    return this.httpClient.get<any>(`${this.assetsUrl}/tw-county.geojson`)
      .pipe(
        map(res => {
          console.log('qqq',res)
          return res.features;
          // const newGEO = res.features.reduce((total, arr) => {
          //   const temp = arr.geometry.coordinates.reduce((t, a) => {
          //     let aa = [];
          //     a.map(e => {
          //       aa.push(e.reverse())
          //     })

          //     return [...t, ...aa];
          //   }, []);


          //   const obj = {
          //     properties: arr.properties,
          //     geometry: {
          //       type: arr.geometry.type,
          //       coordinates: temp
          //     }
          //   };

          //   console.log( 'obj',obj,temp )

          //   return [...total, obj];

          // }, []);


          // console.log('GEO', newGEO, res)
        }),
        tap(res => {
          this.appStoreService.setGeoList(res);
        })
      )
  }
}
