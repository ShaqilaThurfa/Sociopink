
import type { ProductType } from "@/app/db/models/products";
import AddToWishList from "@/components/addToWishList";

export default async function Page() {
  const response = await fetch("http://localhost:3000/api");
  const products: ProductType[] = await response.json();

  return (
    <div>
      <AddToWishList products={products} />
    </div>
  );
}