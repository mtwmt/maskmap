import { Component } from '@angular/core';
import { AppStoreService } from './app-store.service';
import { AppService } from './app.service';
import { combineLatest, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  location: any;
  constructor(
    public appStoreService: AppStoreService,
  ) {
    this.appStoreService.featchUserlocal();

  }

}
