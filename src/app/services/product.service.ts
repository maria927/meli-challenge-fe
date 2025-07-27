import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(): Observable<Product> {
    const mockProduct: Product = {
      id: 'samsung-galaxy-a55-5g',
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
        'https://images.pexels.com/photos/163065/mobile-phone-android-apps-163065.jpeg',
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

  getRelatedProducts(): Observable<Product[]> {
    const relatedProducts: Product[] = [
      {
        id: 'samsung-m55-5g',
        title: 'Samsung Galaxy M55 5G 256GB Dual SIM Teletrabajo',
        price: 421,
        currency: 'US$',
        images: ['https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'],
        rating: 4.3,
        reviewCount: 120,
        stock: 5,
        description: '',
        seller: { name: 'Samsung', reputation: 'Tienda oficial', isOfficial: true, salesCount: 50000 },
        specifications: [],
        paymentMethods: [],
        shipping: { isFree: true, estimatedDays: '3-5 días', location: 'Envío gratis' }
      },
      {
        id: 'motorola-edge-50',
        title: 'Motorola Edge 50 Fusion 5g 256 Gb Azul Ártico 8 Gb Ram',
        price: 419,
        currency: 'US$',
        images: ['https://images.pexels.com/photos/163065/mobile-phone-android-apps-163065.jpeg'],
        rating: 4.2,
        reviewCount: 85,
        stock: 3,
        description: '',
        seller: { name: 'Motorola', reputation: 'Tienda oficial', isOfficial: true, salesCount: 30000 },
        specifications: [],
        paymentMethods: [],
        shipping: { isFree: true, estimatedDays: '3-5 días', location: 'Envío gratis' }
      },
      {
        id: 'samsung-a36-5g',
        title: 'Samsung Galaxy A36 5g 8gb 256GB Negro Titanio',
        price: 326,
        currency: 'US$',
        images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg'],
        rating: 4.4,
        reviewCount: 200,
        stock: 8,
        description: '',
        seller: { name: 'Samsung', reputation: 'Tienda oficial', isOfficial: true, salesCount: 80000 },
        specifications: [],
        paymentMethods: [],
        shipping: { isFree: true, estimatedDays: '3-5 días', location: 'Envío gratis' }
      }
    ];

    return of(relatedProducts);
  }
}