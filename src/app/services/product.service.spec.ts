import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const mockProduct: Product = {
      id: "MEL1",
      title: 'Samsung Galaxy A55 5G Dual SIM 256 GB Azul',
      description: 'Pantalla de 6.6, 8 GB de RAM, cámara trasera de 50 Mpx, procesador octa-core y batería de larga duración.',
      price: {
        currency: 'ARS',
        amount: 439,
        decimals: 0
      },
      discount: 0.12,
      pictures: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
        'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg'
      ],
      condition: 'new',
      soldQuantity: 120,
      stock: 50,
      rating: 4.5,
      reviewCount: 950,
      installments: {
        count: 10,
        amount: 43.90,
        currency: 'ARS',
        interestFree: true
      },
      paymentMethods: {
        credit: ['Visa', 'MasterCard', 'American Express'],
        debit: ['Visa', 'MasterCard'],
        cash: ['PagoFácil', 'RapiPago']
      },
      seller: {
        id: 'SELLER123',
        name: 'Samsung Oficial',
        reputation: 'high',
        salesCount: 5000,
        location: 'Buenos Aires, Argentina'
      },
      characteristics: [
        'Memoria RAM: 8 GB',
        'Procesador Samsung Exynos 1480',
        'Dispositivo desbloqueado para que lo conectes a cualquier compañía telefónica preferida'
      ],
      specifications: [
        { label: 'Tamaño de la pantalla', value: '6.6"' },
        { label: 'Ram', value: '8 GB' },
        { label: 'Almacenamiento', value: '256 GB' },
        { label: 'Cámara principal', value: '50 mpx' },
        { label: 'Cámara frontal', value: '32 mpx' }
      ],
      shipping: {
        freeShipping: true,
        estimatedDelivery: '3-5 days'
      }
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve product by ID (success)', () => {
    service.getProductById('MEL1').subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne('http://localhost:8080/meli-products/api/v1/products/MEL1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });

  it('should throw error when product not found (fail)', () => {
    service.getProductById('404').subscribe({
      next: () => fail('Expected error'),
      error: (error) => {
        expect(error).toEqual(new Error('Product not found'));
      }
    });

    const req = httpMock.expectOne('http://localhost:8080/meli-products/api/v1/products/404');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });
});
