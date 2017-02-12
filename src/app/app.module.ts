import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/application/app.component';
import { SearchComponent } from './component/search/search';
import { StarsComponent } from './component/stars/stars';
import { ProductItemComponent } from './component/product-item/product-item';
import { NavbarComponent } from './component/navbar/navbar';
import { FooterComponent } from './component/footer/footer';
import { CarouselComponent } from './component/carousel/carousel';

import { ProductService } from './services/product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StarsComponent,
    ProductItemComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
