import React from "react";
import { ProductType } from "@/app/db/models/products";
import Link from "next/link";
import ProductsList from "./list products";

type FeatureProductProps = {
  products: ProductType[];
};

const FeaturedProducts: React.FC<FeatureProductProps> = ({ products = [] }) => {
  return (
    <section className="my-10 justify-center lg:px-0 w-full">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      <div className="flex justify-center overflow-x-scroll whitespace-nowrap no-scrollbar">
        <div className="inline-flex gap-6">
          <ProductsList products={products} />
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
        >
          See more products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
