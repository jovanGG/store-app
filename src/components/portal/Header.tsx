import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Admin Portal</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/portal"
                className="text-foreground hover:text-primary font-medium"
              >
                Dashboard
              </Link>
            </nav>
          </div>

          <Button asChild variant="outline">
            <Link href="/store" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Store</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
