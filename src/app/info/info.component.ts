import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    public appStoreService: AppStoreService,
  ) { }

  ngOnInit() {
  }
  onClose(){
    this.appStoreService.isInfo$.next('close');
  }
}
