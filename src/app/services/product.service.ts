import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/meli-products/api/v1';

  constructor(private http: HttpClient) { }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn('API call failed, falling back to mock data:', error.message);
        throw new Error('Product not found');
      })
    );
  }

  private getMockProduct(id: string): Observable<Product> {
    const mockProduct: Product = {
      id: id,
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

    return of(mockProduct);
  }

  setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}