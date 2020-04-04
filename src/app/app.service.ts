import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppStoreService } from './app-store.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
            e.properties.open = this.appStoreService.getOpenTime(e.properties.service_periods);
            // console.log('open',e.properties.available)
          });
          return res.features.filter(e => e.properties.mask_adult > 0 || e.properties.mask_child > 0);
        })
      );
  }

  featchTWGeo() {
    return this.httpClient.get<any>(`${this.assetsUrl}/tw-county.geojson`)
      .pipe(
        map(res => {
          return res.features;
        })
      );
  }

  locations$ = new Observable((observer) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        observer.next(position.coords);
      }, (error: PositionError) => {
        alert('定位錯誤, 將定位導到台北101');
        observer.next({
          latitude: 25.0032999,
          longitude: 121.5540404,
          accuracy: null
        });
        // observer.error(error);
      });
    } else {
      observer.error('Geolocation not available');
    }
  });
}
