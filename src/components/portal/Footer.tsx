import Link from "next/link";
import { Package, ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Premium Supplements Admin Portal
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/portal"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="/store"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-1"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Store</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Premium Supplements Admin Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}