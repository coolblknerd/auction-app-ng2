import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './component/application/app.component';
import { SearchComponent } from './component/search/search';
import { StarsComponent } from './component/stars/stars';
import { ProductItemComponent } from './component/product-item/product-item';
import { NavbarComponent } from './component/navbar/navbar';
import { FooterComponent } from './component/footer/footer';
import { CarouselComponent } from './component/carousel/carousel';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

import { ProductService } from './services/product-service.service';

import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StarsComponent,
    ProductItemComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ProductService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
