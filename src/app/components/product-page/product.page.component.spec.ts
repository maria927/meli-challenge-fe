import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ProductPageComponent } from './product.page.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  let mockActivatedRoute: any;
  let mockRouter: jasmine.SpyObj<Router>;

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
    characteristics: ['8GB RAM'],
    specifications: [{ label: 'RAM', value: '8 GB' }],
    shipping: { freeShipping: true, estimatedDelivery: '3-5 days' }
  };

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    mockActivatedRoute = {
      paramMap: of(new Map([['id', 'MLA172839']]))
    };

    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      providers: [
        { provide: ProductService, useValue: productServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    mockProductService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product on init', () => {
    mockProductService.getProductById.and.returnValue(of(mockProduct));

    component.ngOnInit();

    expect(mockProductService.getProductById).toHaveBeenCalledWith('MLA172839');
    expect(component.product).toEqual(mockProduct);
    expect(component.loading).toBeFalse();
    expect(component.error).toBeNull();
  });

  it('should handle unknown error format', () => {
    mockProductService.getProductById.and.returnValue(throwError({}));

    component.ngOnInit();

    expect(component.loading).toBeFalse();
    expect(component.error).toBe('Error loading product. Please try again.');
  });

  it('should retry loading product', () => {
    mockProductService.getProductById.and.returnValue(of(mockProduct));
    component.productId = 'MLA172839';

    component.retryLoad();

    expect(mockProductService.getProductById).toHaveBeenCalledWith('MLA172839');
  });

  it('should handle route parameter changes', () => {
    mockActivatedRoute.paramMap = of(new Map([['id', 'NEW_ID']]));
    mockProductService.getProductById.and.returnValue(of(mockProduct));

    component.ngOnInit();

    expect(mockProductService.getProductById).toHaveBeenCalledWith('NEW_ID');
  });

  it('should handle missing product ID', () => {
    mockActivatedRoute.paramMap = of(new Map());

    component.ngOnInit();

    expect(component.error).toBe('No product ID provided');
    expect(component.loading).toBeFalse();
  });
});