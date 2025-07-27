import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoComponent } from './product.info.component';
import { Product } from '../../models/product.model';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  const mockProduct: Product = {
    id: 'MLA172839',
    title: 'Samsung Galaxy A55 5G',
    description: 'Test description',
    price: { currency: 'ARS', amount: 439, decimals: 0 },
    discount: 0.12,
    pictures: ['image1.jpg'],
    condition: 'new',
    soldQuantity: 120,
    stock: 50,
    rating: 4.5,
    reviewCount: 950,
    installments: { count: 10, amount: 43.90, currency: 'ARS', interestFree: true },
    paymentMethods: {
      credit: ['Visa'],
      debit: ['Visa'],
      cash: ['PagoFácil']
    },
    seller: {
      id: 'SELLER123',
      name: 'Samsung Oficial',
      reputation: 'high',
      salesCount: 5000,
      location: 'Buenos Aires'
    },
    characteristics: ['8GB RAM', 'Processor Samsung Exynos'],
    specifications: [{ label: 'RAM', value: '8 GB' }],
    shipping: { freeShipping: true, estimatedDelivery: '3-5 days' }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct star array', () => {
    const stars = component.getStarArray();
    expect(stars).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly identify filled stars', () => {
    expect(component.isStarFilled(1)).toBeTrue();
    expect(component.isStarFilled(4)).toBeTrue();
    expect(component.isStarFilled(5)).toBeFalse();
  });

  it('should handle whole number ratings', () => {
    component.product.rating = 4;
    expect(component.isStarFilled(4)).toBeTrue();
    expect(component.isStarFilled(5)).toBeFalse();
    expect(component.isStarHalf(5)).toBeFalse();
  });

  it('should display product information correctly', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.textContent).toContain('Samsung Galaxy A55 5G');
    expect(compiled.textContent).toContain('120 vendidos');
    expect(compiled.textContent).toContain('950');
  });
});