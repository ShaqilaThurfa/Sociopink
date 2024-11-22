import DetailProduct from "@/components/detail product";

import type { SecondArgs } from "@/app/api/products/[slug]/route";
import type { ProductType } from "@/app/db/models/products";
import { Metadata } from "next";
import { getProductByParams } from "@/components/actions";

export async function generateMetadata({ params }: SecondArgs): Promise<Metadata> {
  const { slug } = params;
  const product = await getProductByParams(slug);

  // console.log(product);
  

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.thumbnail]
    }
  };
}

export default async function Page({ params}: SecondArgs) {

  const {slug} = params;  
  // console.log(slug);

  // const response = await fetch(`http://localhost:3000/api/products/${slug}`);
  const product = await getProductByParams(slug);
  // const product: ProductType[] = await response.json();
  

  // console.log('ini isi apa',product.price);
  // console.log('ini response',response);
  return (
    <div>
      <DetailProduct product={product}/>
    </div>
  )
}