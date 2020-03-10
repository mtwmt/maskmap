import { Component } from '@angular/core';
import { AppStoreService } from './app-store.service';
import { AppService } from './app.service';
import { combineLatest, Observable, interval, concat, forkJoin, of, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
    this.appStoreService.featchUserlocal();

    combineLatest(
      this.appService.fetchTaiwanCity(),
      this.appService.fetchPharmacy(),
      this.appService.featchTWGeo(),
      this.appStoreService.location$
    ).pipe(
      map(([city, list, geo, local]) => {
        this.appStoreService.calDistance(list, local);
        return [city, list, geo, local];
      })
    ).subscribe(([city, list, geo, local]) => {

      if (local.accuracy) {
        this.appStoreService.distancePharmacyList(2, list);
      } else {
        this.appStoreService.city$.next('台北市');
        this.appStoreService.setPharmacyList('台北市');
      }
    });

  }

}
