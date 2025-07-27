import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-related-products',
  templateUrl: './related.products.component.html',
  styleUrls: ['./related.products.component.css']
})
export class RelatedProductsComponent {
  @Input() products: Product[] = [];
}