import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.page.component.html',
  styleUrls: ['./product.page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  relatedProducts: Product[] = [];
  loading = true;
  error: string | null = null;
  productId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.loadProduct(this.productId);
      } else {
        this.error = 'No product ID provided';
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProduct(id: string): void {
    this.loading = true;
    this.error = null;
    
    this.productService.getProductById(id).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.error = 'Error loading product. Please try again.';
        this.loading = false;
      }
    });
  }

  // Method to navigate to another product
  navigateToProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

  // Method to retry loading if there's an error
  retryLoad(): void {
    if (this.productId) {
      this.loadProduct(this.productId);
    }
  }
}