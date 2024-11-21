'use client'

import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';

type AddToWishListProps = {
  productId: string; 
};



export default function AddToWishList({productId}: AddToWishListProps) {

  const router = useRouter()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); 
        throw new Error(errorData.message); 
      }

      const data = await res.json();
      // console.log("Success:", data);
      setIsWishlisted(true);
      Swal.fire({
        title: "Success!",
        text: `${data.message}`,
        timer: 2000,
      })

      router.push('/products')

    } catch (error) {
      console.error("Error:", error);
      if(error instanceof Error){
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        })
      }
    }
  };

  return (
    <div className="container flex items-center justify-center w-22 h-10 border-2 border-gray-300 rounded gap-x-2">
      <div
        className={`${
          isWishlisted ? "text-pink-500" : "text-gray-500"
        } transition-colors duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill={isWishlisted ? "pink" : "none"} 
          viewBox="0 0 24 24"
          stroke={isWishlisted ? "pink" : "currentColor"} 
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.06l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </div>

      <button
        className="font-sans font-bold text-xs"
        onClick={handleSubmit}
        // disabled={isWishlisted}
      >
        {isWishlisted ? "Wishlisted" : "Add To WishList"}
      </button>
    </div>

  )
}