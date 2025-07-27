export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  currency: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  seller: Seller;
  specifications: Specification[];
  paymentMethods: PaymentMethod[];
  shipping: ShippingInfo;
  installments?: InstallmentInfo;
}

export interface Seller {
  name: string;
  reputation: string;
  isOfficial: boolean;
  salesCount: number;
}

export interface Specification {
  label: string;
  value: string;
}

export interface PaymentMethod {
  type: string;
  name: string;
  icon?: string;
}

export interface ShippingInfo {
  isFree: boolean;
  estimatedDays: string;
  location: string;
}

export interface InstallmentInfo {
  count: number;
  amount: number;
  currency: string;
}