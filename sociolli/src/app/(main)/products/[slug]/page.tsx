import DetailProduct from "@/components/detail product";

import type { SecondArgs } from "@/app/api/products/[slug]/route";

import { Metadata } from "next";
import { getProductByParams } from "@/components/actions";

export async function generateMetadata({ params }: SecondArgs): Promise<Metadata> {
  const { slug } = params;
  const product = await getProductByParams(slug);


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


  
  const product = await getProductByParams(slug);
 
  return (
    <div>
      <DetailProduct product={product}/>
    </div>
  )
}