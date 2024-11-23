"use client"


import Image from "next/image";
import firstbanner from "../assets/firstbanner.webp";
import { useRouter } from "next/navigation";


export default function Banner() {
  const router = useRouter();
  return (
    <div className="carousel rounded-box mx-auto w-[70vw] h-[50vh] flex justify-center items-center">
    
      <div className="carousel-item w-full h-full rounded-lg">
        
        <div className="carousel-item">
          <Image
            src={firstbanner}
            alt="Banner 1"
            width={400}
            height={400}
            className="w-[50vw] h-[50vh] object-cover rounded-lg"
            priority
          />
        </div>
        
        <div className="carousel-item w-[50vw] h-[50vh] flex items-center bg-pink-200">
          <button className="mx-8 text-4xl font-bold text-pink-700 justify-self hover:text-pink-900 hover:border-pink-700 
            active:bg-pink-100 active:text-pink-800 transition duration-300" onClick={() => router.push("/products")}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
