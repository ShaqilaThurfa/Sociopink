"use client"


import Image from "next/image";
import firstbanner from "../assets/firstbanner.webp";
import { useRouter } from "next/navigation";


export default function Banner() {
  const router = useRouter();
  return (
    <div className="carousel rounded-box mx-auto w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] mt-16">
      <div className="carousel-item w-full h-full relative">


        <div className="w-full h-full">
          <Image
            src={firstbanner}
            alt="Banner 1"
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </div>


        <div className="absolute inset-0 flex items-center justify-center bg-pink-200 bg-opacity-20">
          <button
            className="
            px-4 py-2 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-pink-700 
            bg-white border-2 border-pink-700 rounded-lg shadow-md 
            hover:text-white hover:bg-pink-700 hover:border-white transition duration-300 
            mt-[22%] sm:mt-[17%] md:mt-[16%] lg:mt-[13%]"
            onClick={() => router.push("/products")}
          >
            Shop Now
          </button>
        </div>


      </div>
    </div>
  );
}
