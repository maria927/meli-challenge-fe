import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSpecsComponent } from './product.specs.component';
import { Product } from '../../models/product.model';

describe('ProductSpecsComponent', () => {
  let component: ProductSpecsComponent;
  let fixture: ComponentFixture<ProductSpecsComponent>;

  const mockProduct: Product = {
    id: 'MLA172839',
    title: 'Samsung Galaxy A55 5G',
    description: 'Test description with detailed information about the product.',
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
    characteristics: ['8GB RAM'],
    specifications: [
      { label: 'Tamaño de la pantalla', value: '6.6"' },
      { label: 'RAM', value: '8 GB' },
      { label: 'Almacenamiento', value: '256 GB' }
    ],
    shipping: { freeShipping: true, estimatedDelivery: '3-5 days' }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSpecsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSpecsComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product specifications', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.textContent).toContain('Características del producto');
    expect(compiled.textContent).toContain('Tamaño de la pantalla');
    expect(compiled.textContent).toContain('6.6"');
    expect(compiled.textContent).toContain('RAM');
    expect(compiled.textContent).toContain('8 GB');
  });

  it('should display product description', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.textContent).toContain('Descripción');
    expect(compiled.textContent).toContain('Test description with detailed information');
  });

  it('should render all specifications', () => {
    fixture.detectChanges();
    const specItems = fixture.nativeElement.querySelectorAll('.spec-item');
    
    expect(specItems.length).toBe(mockProduct.specifications.length);
  });
});