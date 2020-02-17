import { Component } from '@angular/core';
import { AppStoreService } from './app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public appStoreService: AppStoreService
  ) { }

}
