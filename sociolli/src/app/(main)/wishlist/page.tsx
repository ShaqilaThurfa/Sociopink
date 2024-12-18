"use client";

import { ProductType } from "@/app/db/models/products";
import { WishListType } from "@/app/db/models/wishlist";
import WishListComponent from "@/components/wishlistList";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export type ExtendedWishListType = WishListType & {
  wishlist: ProductType;
};

export default function Page() {
  const [data, setData] = useState<ExtendedWishListType[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
          method: "GET",
          headers: {
            Cookie: document.cookie,
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }

        const result: ExtendedWishListType[] = await res.json();
        setData(result); 
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); 
          Swal.fire({
            title: "Error!",
            text: err.message,
            timer: 2000,
            icon: "error",
          });
          
        } else {
          setError("An unknown error occurred."); 
        }
        router.push("/");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [router]); 

  if (loading) return <div className="flex justify-center"><p>Loading...</p></div>; 


  if (error) {
    Swal.fire({
      title: "Error!",
      text: error,
      timer: 2000,
      icon: "error",
    });
    return <p>Error: {error}</p>; 
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-pink-600 flex justify-center">My Wishlist</h1>
     
      <WishListComponent wishlists={data} />
    </div>
  );
}
