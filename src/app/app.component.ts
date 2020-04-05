import { Component } from '@angular/core';
import { AppStoreService } from './app-store.service';
import { AppService } from './app.service';
import { combineLatest, timer, interval } from 'rxjs';
import { map, take, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  location: any;
  constructor(
    public appStoreService: AppStoreService,
    private appService: AppService
  ) {

    this.appService.locations$.pipe(
      switchMap((res: any) => {
        return combineLatest(
          this.appService.fetchTaiwanCity(),
          this.appService.fetchPharmacy(),
          this.appService.featchTWGeo(),
        ).pipe(
          map(([city, list, geo]) => {
            this.appStoreService.calDistance(list, res);
            return [city, list, geo, res];
          })
        )
      })
    ).subscribe(([city, list, geo, local]) => {

      this.appStoreService.allCityList(city);
      this.appStoreService.allPharmacyList(list);
      this.appStoreService.allGeoList(geo);
      this.appStoreService.location$.next(local);

      if (local.accuracy) {
        this.appStoreService.distancePharmacyList(this.appStoreService.distanceRange, list);
        this.appStoreService.isNear$.next(true);
        this.appStoreService.clsList$.next('open');
      } else {
        this.appStoreService.city$.next('台北市');
        this.appStoreService.setPharmacyList('台北市');
        this.appStoreService.isNear$.next(false);
      }
    });

    timer(8000).subscribe(res => {

      this.appStoreService.clsInfo$.next('close');
    });
  }

}
