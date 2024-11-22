"use client";

import ProductsList from "@/components/list products";
import type { ProductType } from "@/app/db/models/products";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Swal from "sweetalert2";

const FirstProduct = ({ product }: { product: ProductType[] }) => {
  const [products, setProducts] = useState<ProductType[]>(product || []);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/products?page=${page}`);
      const data = await res.json();

      console.log(data);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchProducts();
  }, [page]);

  return (
    <div>
      <InfiniteScroll
        dataLength={products?.length || 0}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more products</p>}
      >
        <ProductsList products={products} />
      </InfiniteScroll>
    </div>
  );
};

export default FirstProduct;
