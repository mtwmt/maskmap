import { Component } from '@angular/core';
import { AppStoreService } from './app-store.service';
import { AppService } from './app.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
      this.appStoreService.distancePharmacyList(2, res.pharmacyList);

    });
  }

}
