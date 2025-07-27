import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image-gallery',
  templateUrl: './product.image.gallery.component.html',
  styleUrls: ['./product.image.gallery.component.css']
})
export class ProductImageGalleryComponent {
  @Input() images: string[] = [];
  selectedImageIndex = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }
}