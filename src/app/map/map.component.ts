import { Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, combineLatest } from 'rxjs';

import * as L from 'leaflet';
import 'leaflet.markercluster';

import * as turf from '@turf/turf';
import * as bbox from '@turf/bbox';
import * as bboxPolygon from '@turf/bbox-polygon';
import * as intersect from '@turf/intersect';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('maskmap', { static: true }) chartElement: ElementRef;

  assetsUrl = environment.assetsUrl;
  token = environment.token;

  map: any;
  pharmacyList: Array<any>;
  curPharmacy: Array<any>;
  group: L.MarkerClusterGroup;
  icons: any;
  prevPoint: any;
  location: L.LatLngExpression = [25.0032999, 121.5540404];
  location$ = new BehaviorSubject(this.location);
  countryLayer = null;
  locationMarker;

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) {
    this.getPosition();

    combineLatest(
      this.appStoreService.getPharmacy$,
      this.appStoreService.getGeoPolygon$
    ).pipe(
      map(res => {
        if (!res[0] || !res[1]) { return; }

        const info = res[0].reduce((total, el) => {
          total.push({ ...el.properties, coordinates: el.geometry.coordinates });
          return total;
        }, []);

        return {
          pharmacyPoint: info,
          geoPolyogn: res[1].localGeo,
          curCity: [res[1].localCityPos[0].Latitude, res[1].localCityPos[0].Longitude]
        }
      })
    ).subscribe(res => {
      if (!res) { return; }
      this.renderMap( res )
    });

    this.icons = {
      red: this.customIcon('red'),
      orange: this.customIcon('orange'),
      yellow: this.customIcon('yellow'),
      green: this.customIcon('green'),
      blue: this.customIcon('blue'),
      violet: this.customIcon('violet'),
      gold: this.customIcon('gold'),
      grey: this.customIcon('grey'),
    };
  }

  ngOnInit() {

    // 樣式ID https://docs.mapbox.com/api/maps/#mapbox-styles

    this.map = L.map('map', {
      center: this.location,
      zoom: 13,
      // zoomControl: false,
      layers: [L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution: '&copy; 口罩地圖 by <a href="https://mtwmt.github.io/" target="_blank">Mandy</a>',
          maxZoom: 20,
          id: 'mapbox/streets-v11',
          accessToken: this.token
        }
      )]
    });

    this.appStoreService.getCurInfo$.subscribe(res => {
      this.onPharmacy(res);
    });


    this.location$.subscribe(res => {
      if(this.locationMarker ){
        this.map.removeLayer(this.locationMarker);
      }
      this.location = res;
      this.map.setView(res, 9);

      this.locationMarker = L.marker(this.location, { icon: this.icons.gold }).addTo(this.map);
      
    });

    
    // combineLatest(
    //   this.appService.featchTWGeo(),
    //   this.appStoreService.city$,
    // ).pipe(
    //   map(res => {
    //     return res;
    //   })
    // ).subscribe(res => {
    //   if (!res[1]) { return; }

    //   if (this.countryLayer) {
    //     this.countryLayer.clearLayers();
    //   }
    //   const city = res[1];
    //   const geo = res[0].filter(e => e.properties.name !== city);

    //   this.countryLayer = L.geoJSON(null)
    //     .addData(geo)
    //     .addTo(this.map);
    // })


  }
  ngAfterViewInit() { }
  ngOnDestroy() {
    this.location$.unsubscribe();
  }

  renderMap(data: any) {

    if (this.group) {
      this.map.removeLayer(this.group);
    }

    if (this.countryLayer) {
      this.countryLayer.clearLayers();
    }

    this.group = new L.MarkerClusterGroup().addTo(this.map);

    data.pharmacyPoint.map((e, i) => {
      this.addMarker(e);
    });
    this.map.addLayer(this.group);
    this.map.setView(data.curCity, 9);

    this.countryLayer = L.geoJSON(null)
        .addData(data.geoPolyogn)
        .addTo(this.map);
  }

  onPharmacy(info) {
    this.map
      .setView(info.coordinates, 13)
      .closePopup();

    if (this.prevPoint) {
      this.map.removeLayer(this.prevPoint);
    }

    this.prevPoint = L.marker(info.coordinates, { icon: this.icons.red })
      .addTo(this.map)
      .bindPopup(this.customPopup(info))
      .openPopup();
  }
  addMarker(info) {
    const marker = L.marker(info.coordinates, { icon: this.icons.grey }).bindPopup(this.customPopup(info));
    this.group.addLayer(marker);
  }
  customPopup(info) {
    // console.log('customPopup', info)
    return `
      <div class="customPopup">
        <div class="customPopup__title">${ info.name}</div>
        <div class="customPopup__block-left">
          <div class="customPopup__addr">${ info.address}</div>
          <div class="customPopup__note">${ info.note}</div>
          <div class="customPopup__phone">${ info.phone}</div>
        </div>
        <div class="customPopup__block-right">
          <div class="customPopup__block-flex">
            <div class="customPopup__child">
              <img src="${this.assetsUrl}/child.svg" />
              <p>${ info.mask_child}</p>
            </div>
            <div class="customPopup__adult">
              <img src="${this.assetsUrl}/adult.svg" />
              <p>${ info.mask_adult}</p>
            </div>
          </div>
          <a href="tel:${info.phone}" class="customPopup__tel">
            <img src="${this.assetsUrl}/tel.svg" />
          </a>
        </div>
        <div class="customPopup__updated">更新時間：${ info.updated}</div>
        <a href="https://www.google.com/maps/dir/${this.location[0]},${this.location[1]}/${info.coordinates[0]},${info.coordinates[1]}"
          class="customPopup__google"
          target="_blank"
        >
          <img src="${this.assetsUrl}/vecotr.svg" />規劃路線
        </a>
      </div>
    `;
  }
  customIcon(color: string) {
    return L.icon({
      iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }
  getPosition() {
    navigator.geolocation.getCurrentPosition((data) => {
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      this.location$.next([latitude, longitude]);
    });
  }


}


// lat: 22.xxxx  lng: 120.xxxx