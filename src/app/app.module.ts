import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product.page.component';
import { ProductImageGalleryComponent } from './components/product-image-gallery/product.image.gallery.component';
import { ProductInfoComponent } from './components/product-info/product.info.component';
import { ProductSpecsComponent } from './components/product-specs/product.specs.component';
import { RelatedProductsComponent } from './components/related-products/related.products.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductImageGalleryComponent,
    ProductInfoComponent,
    ProductSpecsComponent,
    RelatedProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }