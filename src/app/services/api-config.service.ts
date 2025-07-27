import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private readonly defaultApiUrl = 'http://localhost:8080/meli-products/api/v1';
  
  constructor() { }

  getApiUrl(): string {
    return this.defaultApiUrl;
  }

  getEndpoints() {
    const baseUrl = this.getApiUrl();
    return {
      productById: (id: string) => `${baseUrl}/products/${id}`
    };
  }
}