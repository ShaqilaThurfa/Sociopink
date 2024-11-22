"use client";

import Swal from "sweetalert2";
import { revalidateByPath } from "./actions";
import { useRouter } from "next/navigation";



type DeleteWishlistProps = {
  wishlistId: string;
};

export default function DeleteWishlist({ wishlistId }: DeleteWishlistProps) {
  const router = useRouter();

  const handleOnDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    
    try {
      console.log(wishlistId);
      

      const res = await fetch("http://localhost:3000/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wishlistId }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete wishlist");
      }

      Swal.fire({
        title: "Success!",
        text: "This product has been removed from your wishlist",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });

      await revalidateByPath(`/wishlist`);
      await router.refresh()

    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: error instanceof Error ? error.message : "Something went wrong",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <button
      onClick={handleOnDelete}
      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6h18M9 6v12m6-12v12M4 6a1 1 0 011-1h14a1 1 0 011 1M4 6a1 1 0 01-1 1M20 6a1 1 0 01-1-1"
        />
      </svg>
    </button>
  );
}
