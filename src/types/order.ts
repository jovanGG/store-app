import { CartItem } from "./cart";

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string;
  status: OrderStatus;
  items: CartItem[];
  customerInfo: CustomerInfo;
  orderDate: Date;
  total: number;
  tax: number;
  subtotal: number;
}
