import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
import { MatIconModule } from '@angular/material/icon';



import { AppComponent } from './app.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';
import { BizCardComponent } from './biz-card/biz-card.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MichaelLimousineComponent,
    BizCardComponent,
    routingComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatIconModule
    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
