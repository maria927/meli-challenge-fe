import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product.specs.component.html',
  styleUrls: ['./product.specs.component.css']
})
export class ProductSpecsComponent {
  @Input() product!: Product;
}