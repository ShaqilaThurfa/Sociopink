import Banner from "@/components/banner";
import FeaturedProducts from "@/components/featureproduct";
import { ProductType } from "@/app/db/models/products";
import About from "@/components/infoSocioPink";



async function fetchProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?page=1`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: ProductType[] = await res.json();
    return data.slice(0, 4); 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await fetchProducts();

  return (
    <div>
      <Banner />
      <FeaturedProducts products={featuredProducts} />
      <About/>
    </div>
  );
}
