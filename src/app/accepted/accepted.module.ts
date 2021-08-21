import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AcceptedPageRoutingModule } from './accepted-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { AcceptedPage } from './accepted.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { GoogleMapsService } from '../services/network/google-maps.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AcceptedPageRoutingModule
  ], providers: [GoogleMapsService, InAppBrowser, CallNumber, PhotoViewer],
  declarations: [AcceptedPage]
})
export class AcceptedPageModule { }