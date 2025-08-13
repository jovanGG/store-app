"use client";

import { use } from "react";
import { useCart } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categoryIcons } from "@/lib/constants";
import { CheckCircle, Package, Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface OrderConfirmationProps {
  params: Promise<{
    orderId: string;
  }>;
}

export default function OrderConfirmationPage({
  params,
}: OrderConfirmationProps) {
  const { orderId } = use(params);
  const { getOrderById } = useCart();
  const order = getOrderById(orderId);

  if (!order) {
    notFound();
  }

  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your order. We&apos;ll send you a confirmation email
            shortly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Order Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="ml-2 font-mono">{order.id}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Order Date:</span>
                      <span className="ml-2">
                        {order.orderDate.toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="ml-2 bg-green-500">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Shipping Address</h3>
                  <div className="text-sm space-y-1">
                    <div>
                      {order.customerInfo.firstName}{" "}
                      {order.customerInfo.lastName}
                    </div>
                    <div>{order.customerInfo.address}</div>
                    <div>
                      {order.customerInfo.city}, {order.customerInfo.state}{" "}
                      {order.customerInfo.zipCode}
                    </div>
                    <div className="text-muted-foreground">
                      {order.customerInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg"
                  >
                    <div className="text-3xl">
                      {categoryIcons[item.product.category]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{item.product.name}</h4>
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
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            ${item.product.price} × {item.quantity}
                          </div>
                          <div className="font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Total */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>What&apos;s Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Order Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive an email confirmation with your order
                      details and tracking information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll prepare your order for shipment within 1-2 business
                      days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Your order will be shipped and you'll receive tracking
                      information via email.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/store/products">
                <Package className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/store">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
