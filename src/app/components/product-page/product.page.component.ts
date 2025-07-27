import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.page.component.html',
  styleUrls: ['./product.page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  relatedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product => {
      this.product = product;
    });

    this.productService.getRelatedProducts().subscribe(products => {
      this.relatedProducts = products;
    });
  }
}