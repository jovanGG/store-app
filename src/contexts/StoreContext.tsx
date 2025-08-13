"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";
import { Order, CustomerInfo, OrderStatus } from "@/types/order";
import { dummyOrders } from "@/data/orders";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface StoreContextType {
  // Cart functionality
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
  
  // Order functionality
  orders: Order[];
  createOrder: (customerInfo: CustomerInfo) => Promise<string>;
  getOrderById: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const router = useRouter();

  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = items.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      setItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
      
      // Show toast for quantity update
      toast.success(`Updated ${product.name} quantity in cart!`, {
        description: `Now ${existingItem.quantity + quantity} in cart`,
        action: {
          label: "View Cart",
          onClick: () => router.push("/store/cart")
        }
      });
    } else {
      // Add new item
      setItems((currentItems) => [...currentItems, { product, quantity }]);
      
      // Show toast for new item
      toast.success(`${product.name} added to cart!`, {
        description: `${quantity} item${quantity > 1 ? 's' : ''} added`,
        action: {
          label: "View Cart",
          onClick: () => router.push("/store/cart")
        }
      });
    }
  };

  const removeFromCart = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Order functions
  const createOrder = async (customerInfo: CustomerInfo): Promise<string> => {
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    const newOrder: Order = {
      id: orderId,
      status: "pending",
      items: [...items], // Copy current cart items
      customerInfo,
      orderDate: new Date(),
      subtotal,
      tax,
      total,
    };

    setOrders(currentOrders => [...currentOrders, newOrder]);
    
    // Clear cart after creating order
    clearCart();
    
    return orderId;
  };

  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(currentOrders => 
      currentOrders.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const value: StoreContextType = {
    // Cart functionality
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    
    // Order functionality
    orders,
    createOrder,
    getOrderById,
    updateOrderStatus,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useCart() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a StoreProvider");
  }
  return context;
}
