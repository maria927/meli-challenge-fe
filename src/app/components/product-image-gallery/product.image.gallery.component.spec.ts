import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageGalleryComponent } from './product.image.gallery.component';

describe('ProductImageGalleryComponent', () => {
  let component: ProductImageGalleryComponent;
  let fixture: ComponentFixture<ProductImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImageGalleryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageGalleryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first image selected', () => {
    expect(component.selectedImageIndex).toBe(0);
  });

  it('should select image by index', () => {
    component.selectImage(2);
    expect(component.selectedImageIndex).toBe(2);
  });

  it('should display images correctly', () => {
    const testImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    component.images = testImages;
    fixture.detectChanges();

    const thumbnails = fixture.nativeElement.querySelectorAll('.thumbnail');
    expect(thumbnails.length).toBe(3);
    
    const mainImage = fixture.nativeElement.querySelector('.main-image');
    expect(mainImage.src).toContain('image1.jpg');
  });

  it('should update main image when thumbnail is clicked', () => {
    const testImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    component.images = testImages;
    fixture.detectChanges();

    const secondThumbnail = fixture.nativeElement.querySelectorAll('.thumbnail')[1];
    secondThumbnail.click();
    fixture.detectChanges();

    expect(component.selectedImageIndex).toBe(1);
    const mainImage = fixture.nativeElement.querySelector('.main-image');
    expect(mainImage.src).toContain('image2.jpg');
  });

  it('should apply active class to selected thumbnail', () => {
    const testImages = ['image1.jpg', 'image2.jpg'];
    component.images = testImages;
    component.selectedImageIndex = 1;
    fixture.detectChanges();

    const thumbnails = fixture.nativeElement.querySelectorAll('.thumbnail');
    expect(thumbnails[0].classList.contains('active')).toBeFalse();
    expect(thumbnails[1].classList.contains('active')).toBeTrue();
  });
});