import ProductsList from "@/components/list products";
import type { ProductType } from "@/app/db/models/products";

export default async function Page() {
  const response = await fetch("http://localhost:3000/api");
  const products: ProductType[] = await response.json();

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}