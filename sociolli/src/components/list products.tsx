'use client'

import React from "react";
import type { ProductType } from "@/app/db/models/products";
import { useRouter } from "next/navigation";
import AddToWishList from "./addToWishList";

type ProductsListProps = {
  products: ProductType[];
};

export default function ProductsList({ products }: ProductsListProps) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap mx-0 w-full justify-evenly">
      {products.map((product) => (
        <div
          key={product._id}
          className="card card-compact bg-white w-60 rounded-md"
        >
          <figure className="p-4">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-black">
              {product.name}
            </h2>
            <h3 className="font-sans font-normal text-[13px] text-black">
              {product.description.substring(0, 50)}
            </h3>
            <p
              className="text-[16px] font-bold leading-[22px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#da2a52",
              }}
            >
              Rp. {product.price.toLocaleString("id-ID")}
            </p>
            <div className="mt-2">
            <AddToWishList productId={product._id}/>
            </div>
            <div className="card-actions mt-1">
              <button
                className="btn btn-sm w-full font-sans font-bold text-xs uppercase tracking-[0.1em]"
                style={{
                  backgroundColor: "#da2a52",
                  color: "white",
                }}
                onClick={()=> router.push(`/products/${product.slug}`)}
              >
                Detail Product
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
