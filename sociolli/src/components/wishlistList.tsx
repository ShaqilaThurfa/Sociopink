'use client';

import React from "react";
import { useRouter } from "next/navigation";


import { ExtendedWishListType } from "@/app/(main)/wishlist/page";
import Swal from "sweetalert2";
import DeleteWishlist from "./delete";

type WishListComponentProps = {
  wishlists: ExtendedWishListType[];
};

export default function WishListComponent({ wishlists = [] }: WishListComponentProps ) {
  const router = useRouter();
  
  try {
  

  if (!wishlists.length) {
    return <div className="flex justify-center">You haven't added anything to your wishlist</div>;
  }
    
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: error instanceof Error ? error.message : "Something went wrong",
      timer: 2000,
    });
    
  }

  return (
    <div className="flex flex-wrap mx-0 w-full justify-center">
      {wishlists.map((wishlist) => (
        <div 
          key={wishlist.wishlist._id}
          className="card card-compact bg-white w-60 rounded-md"
        >
          
              <DeleteWishlist/>
              {/* wishlistId={wishlist.wishlist._id} */}
            
       
          <figure className="p-4 mt-2">
            <img
              src={wishlist.wishlist.thumbnail}
              alt={wishlist.wishlist.name} 
              className="w-full h-40 object-cover rounded-md"
            />
          </figure>

        
          <div className="card-body p-4">
           
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-black">
              {wishlist.wishlist.name}
            </h2>

            
            <h3 className="font-sans font-normal text-[13px] text-black">
              {wishlist.wishlist.description.substring(0, 50)}...
            </h3>

            
            <p
              className="text-[16px] font-bold leading-[22px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#da2a52",
              }}
            >
              Rp. {wishlist.wishlist.price.toLocaleString("id-ID")}
            </p>

         
            <div className="card-actions mt-1">
              <button
                className="btn btn-sm w-full font-sans font-bold text-xs uppercase tracking-[0.1em]"
                style={{
                  backgroundColor: "#da2a52",
                  color: "white",
                }}
                onClick={() => router.push(`/products/${wishlist.wishlist.slug}`)} 
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
