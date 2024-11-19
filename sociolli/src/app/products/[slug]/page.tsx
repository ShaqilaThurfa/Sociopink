import DetailProduct from "@/components/detail product";

import type { SecondArgs } from "@/app/api/products/[slug]/route";
import type { ProductType } from "@/app/db/models/products";

export default async function Page({ params}: SecondArgs) {

  const {slug} = params;  

  // console.log(slug);

  const response = await fetch(`http://localhost:3000/api/products/${slug}`);

  const product: ProductType[] = await response.json();

  // console.log('ini isi apa',product.price);
  // console.log('ini response',response);
  return (
    <div>
      <h1>Product</h1>
      <DetailProduct product={product}/>
    </div>
  )
}