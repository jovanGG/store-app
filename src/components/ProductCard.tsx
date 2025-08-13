import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { categoryIcons } from "@/lib/constants";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  showPrice?: boolean;
}

export function ProductCard({ product, showPrice = true }: ProductCardProps) {
  return (
    <Card className="shadow-none relative h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{categoryIcons[product.category]}</div>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            {product.bestSeller && (
              <Badge variant="default" className="text-xs bg-orange-500 hover:bg-orange-600">
                🔥 Best Seller
              </Badge>
            )}
          </div>
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex items-center justify-between">
          {showPrice ? (
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400">Price</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                ${product.price}
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/store/products/${product.id}`}>
              View Product
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
