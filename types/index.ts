export type Category = 'roofing' | 'steel' | 'accessories';

export type Gauge = 28 | 30;

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  pricing: {
    gauge28: number;
    gauge30: number;
  };
  pricingType: 'perMeter' | 'perPiece';
  colors: string[];
  description: string;
}

export interface CartItem {
  product: Product;
  gauge: Gauge;
  color: string;
  meters?: number;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
}
