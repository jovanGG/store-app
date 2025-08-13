import { Order, OrderStatus } from "@/types/order";
import { products } from "./products";

// Helper function to generate random date within last 30 days
const getRandomDate = () => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
  const randomTime = thirtyDaysAgo.getTime() + Math.random() * (now.getTime() - thirtyDaysAgo.getTime());
  return new Date(randomTime);
};

// Helper function to get random products for an order
const getRandomProducts = () => {
  const numItems = Math.floor(Math.random() * 4) + 1; // 1-4 items per order
  const selectedProducts = [];
  const availableProducts = [...products];
  
  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * availableProducts.length);
    const product = availableProducts.splice(randomIndex, 1)[0];
    const quantity = Math.floor(Math.random() * 3) + 1; // 1-3 quantity
    
    selectedProducts.push({
      product,
      quantity
    });
  }
  
  return selectedProducts;
};

// Helper function to get random order status
const getRandomStatus = (): OrderStatus => {
  const statuses: OrderStatus[] = ["pending", "confirmed", "processing", "shipped", "delivered"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

// Dummy customer data
const dummyCustomers = [
  { firstName: "John", lastName: "Smith", email: "john.smith@email.com", address: "123 Main St", city: "New York", state: "NY", zipCode: "10001" },
  { firstName: "Sarah", lastName: "Johnson", email: "sarah.j@email.com", address: "456 Oak Ave", city: "Los Angeles", state: "CA", zipCode: "90210" },
  { firstName: "Michael", lastName: "Brown", email: "m.brown@email.com", address: "789 Pine St", city: "Chicago", state: "IL", zipCode: "60601" },
  { firstName: "Emily", lastName: "Davis", email: "emily.davis@email.com", address: "321 Elm Dr", city: "Houston", state: "TX", zipCode: "77001" },
  { firstName: "David", lastName: "Wilson", email: "d.wilson@email.com", address: "654 Maple Rd", city: "Phoenix", state: "AZ", zipCode: "85001" },
  { firstName: "Lisa", lastName: "Garcia", email: "lisa.g@email.com", address: "987 Cedar Ln", city: "Philadelphia", state: "PA", zipCode: "19101" },
  { firstName: "James", lastName: "Martinez", email: "james.m@email.com", address: "147 Birch St", city: "San Antonio", state: "TX", zipCode: "78201" },
  { firstName: "Jessica", lastName: "Anderson", email: "jessica.a@email.com", address: "258 Walnut Ave", city: "San Diego", state: "CA", zipCode: "92101" },
  { firstName: "Robert", lastName: "Taylor", email: "robert.t@email.com", address: "369 Cherry St", city: "Dallas", state: "TX", zipCode: "75201" },
  { firstName: "Ashley", lastName: "Thomas", email: "ashley.thomas@email.com", address: "741 Spruce Dr", city: "San Jose", state: "CA", zipCode: "95101" },
  { firstName: "Christopher", lastName: "Jackson", email: "chris.j@email.com", address: "852 Ash Rd", city: "Austin", state: "TX", zipCode: "73301" },
  { firstName: "Amanda", lastName: "White", email: "amanda.w@email.com", address: "963 Fir Ln", city: "Jacksonville", state: "FL", zipCode: "32099" },
  { firstName: "Matthew", lastName: "Harris", email: "matt.harris@email.com", address: "159 Poplar St", city: "Fort Worth", state: "TX", zipCode: "76101" },
  { firstName: "Jennifer", lastName: "Clark", email: "jen.clark@email.com", address: "357 Willow Ave", city: "Columbus", state: "OH", zipCode: "43085" },
  { firstName: "Daniel", lastName: "Lewis", email: "daniel.lewis@email.com", address: "753 Hickory Dr", city: "Charlotte", state: "NC", zipCode: "28201" },
];

// Generate 15 dummy orders
export const dummyOrders: Order[] = Array.from({ length: 15 }, (_, index) => {
  const customer = dummyCustomers[index];
  const orderItems = getRandomProducts();
  const subtotal = orderItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  return {
    id: `ORDER-${Date.now() - (index * 86400000)}-${Math.random().toString(36).substr(2, 9)}`,
    status: getRandomStatus(),
    items: orderItems,
    customerInfo: customer,
    orderDate: getRandomDate(),
    subtotal,
    tax,
    total,
  };
}).sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()); // Sort by newest first
