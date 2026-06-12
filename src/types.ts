export interface Product {
  id: string;
  title: string;
  category: 'Automation' | 'Sensors' | 'Industrial Kits' | 'Quality Control';
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  image: string;
  detailImages?: string[];
  specifications?: Record<string, string>;
  rating: number;
  inStock: boolean;
  savePercentage?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  sameAsBilling: boolean;
}
