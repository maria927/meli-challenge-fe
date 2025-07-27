export interface Product {
  id: string;
  title: string;
  description: string;
  price: Price;
  discount: number;
  pictures: string[];
  condition: string;
  soldQuantity: number;
  stock: number;
  rating: number;
  reviewCount: number;
  installments: InstallmentInfo;
  paymentMethods: PaymentMethods;
  seller: Seller;
  characteristics: string[];
  specifications: Specification[];
  shipping: ShippingInfo;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface InstallmentInfo {
  count: number;
  amount: number;
  currency: string;
  interestFree: boolean;
}

export interface PaymentMethods {
  credit: string[];
  debit: string[];
  cash: string[];
}

export interface Seller {
  id: string;
  name: string;
  reputation: string;
  salesCount: number;
  location: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface ShippingInfo {
  freeShipping: boolean;
  estimatedDelivery: string;
}