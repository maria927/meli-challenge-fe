import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product.info.component.html',
  styleUrls: ['./product.info.component.css']
})
export class ProductInfoComponent {
  @Input() product!: Product;

  getStarArray(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  isStarFilled(star: number): boolean {
    return star <= Math.floor(this.product.rating);
  }

  isStarHalf(star: number): boolean {
    return star === Math.ceil(this.product.rating) && this.product.rating % 1 !== 0;
  }
}