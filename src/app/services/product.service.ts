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
        return this.getMockProduct(id);
      })
    );
  }

  private getMockProduct(id: string): Observable<Product> {
    const mockProduct: Product = {
      id: id,
      title: 'Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM',
      description: `Con su potente procesador y 8 GB de RAM, su computadora logrará un alto rendimiento 
      con una alta velocidad de transmisión de contenido y ejecutar varias aplicaciones al mismo tiempo, sin demoras.
      
      Capacidad de almacenamiento limitada
      Olvídate de borrar. Con su memoria interna de 256 GB puedes descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.`,
      price: 439,
      originalPrice: 499,
      discount: 12,
      currency: 'US$',
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
        'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg'
      ],
      rating: 4.5,
      reviewCount: 950,
      stock: 1,
      seller: {
        name: 'Samsung',
        reputation: 'Tienda oficial',
        isOfficial: true,
        salesCount: 100000
      },
      specifications: [
        { label: 'Tamaño de la pantalla', value: '6.6"' },
        { label: 'Resolución', value: '1080 x 2340 px' },
        { label: 'Memoria interna', value: '256 GB' },
        { label: 'Memoria RAM', value: '8 GB' },
        { label: 'Cámara trasera principal', value: '50 Mpx' },
        { label: 'Cámara frontal', value: '32 Mpx' },
        { label: 'Con 5G', value: 'Sí' }
      ],
      paymentMethods: [
        { type: 'credit', name: 'Visa' },
        { type: 'credit', name: 'Mastercard' },
        { type: 'debit', name: 'Mercado Pago' },
        { type: 'cash', name: 'Efectivo' }
      ],
      shipping: {
        isFree: true,
        estimatedDays: '5-7 días hábiles',
        location: 'Envío gratis a todo el país'
      },
      installments: {
        count: 12,
        amount: 36.58,
        currency: 'US$'
      }
    };

    return of(mockProduct);
  }

  setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}