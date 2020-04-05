import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MasklistComponent } from './masklist/masklist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner/spinner.component';
import { TabComponent } from './tab/tab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SelectAreaComponent } from './select-area/select-area.component';
import { InfoComponent } from './info/info.component';

// import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    MasklistComponent,
    SpinnerComponent,
    TabComponent,
    SidebarComponent,
    PharmacyComponent,
    SelectAreaComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
