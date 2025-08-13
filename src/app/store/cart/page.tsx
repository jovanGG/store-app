"use client";

import { useCart } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { categoryIcons } from "@/lib/constants";
import { Trash2, ShoppingBag, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, clearCart, getCartTotal, getCartCount } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-1 flex flex-col justify-center items-center">
          <div className="text-center max-w-md">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven&apos;t added any supplements to your cart yet.
            </p>
            <Button size="lg" asChild>
              <Link href="/store/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground mt-2">
              {getCartCount()} {getCartCount() === 1 ? "item" : "items"} in your
              cart
            </p>
          </div>
          <Button
            variant="outline"
            onClick={clearCart}
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    {/* Product Icon */}
                    <div className="text-4xl flex-shrink-0">
                      {categoryIcons[item.product.category]}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.product.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {item.product.category}
                            </Badge>
                            {item.product.bestSeller && (
                              <Badge className="text-xs bg-orange-500 hover:bg-orange-600">
                                🔥 Best Seller
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.product.description}
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <label className="text-sm font-medium">
                            Quantity:
                          </label>
                          <Input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="w-20 text-center"
                            min="1"
                          />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({getCartCount()} items)</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    asChild
                  >
                    <Link href="/store/checkout">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Go to Checkout
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/store/products">Continue Shopping</Link>
                  </Button>
                </div>

                {/* Free Shipping Banner */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mt-4">
                  <div className="text-sm text-green-700 dark:text-green-300 text-center">
                    🚚 Free shipping on all orders!
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
