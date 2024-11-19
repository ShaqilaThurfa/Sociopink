import react from "react"
import { ProductType } from '@/app/db/models/products'

type DetailProductProps = {
  product: ProductType
}

export default function DetailProduct({ product }: DetailProductProps) {
  return (
    <div className="max-w-4xl mx-0 flex flex-wrap md:flex-nowrap">
      <div className="flex-1">
        <div className="relative">
          <span className="left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            15%
          </span>
          <img
            src={product.images[0]}
            alt="Main Product"
            className="w-full rounded-md"
          />
        </div>
        <div className="flex gap-2 mt-4">
          <img
            src={product.images[1]}
            alt="Thumbnail 1"
            className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-red-500"
          />
          <img
            src={product.images[2]}
            alt="Thumbnail 2"
            className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-red-500"
          />
          <img
            src={product.images[3]}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-red-500"
          />
          <img
            src={product.images[4]}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-red-500"
          />
        </div>
      </div>

      <div className="flex-1 md:ml-8 mt-6 md:mt-0">
        <h1 className="font-sans font-bold text-xl uppercase tracking-[0.2em] text-black">
          {product.name}
        </h1>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-pink-100 font-sans font-bold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4">
          <p className="text-gray-500 line-through">Rp494.000</p>
          <p className="text-red-500 text-2xl font-bold">Rp419.900</p>
          <p className="text-red-500 text-sm">-15%</p>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <span className="text-gray-700">QUANTITY</span>
          <div className="flex items-center border border-gray-300 rounded">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-200">-</button>
            <span className="px-4 py-2">1</span>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-200">+</button>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded hover:bg-gray-200">
            ADD TO BAG
          </button>
          <button className="flex-1 bg-red-500 text-white py-3 rounded hover:bg-red-600">
            BUY NOW
          </button>
        </div>
        <button className="mt-4 text-gray-500 hover:text-gray-700">
          ADD TO WISHLIST
        </button>
        <div className="mt-8">
          <h2 className="text-gray-800 font-bold">SPECIAL PROMO</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-between border p-4 rounded">
              <span className="text-gray-700">REDEEM BEAUTY...</span>
              <span className="text-gray-400">30 Nov 2024</span>
            </li>
            <li className="flex items-center justify-between border p-4 rounded">
              <span className="text-gray-700">REDEEM BEAUTY...</span>
              <span className="text-gray-400">30 Nov 2024</span>
            </li>
            <li className="flex items-center justify-between border p-4 rounded">
              <span className="text-gray-700">FREE GIFT RATE...</span>
            </li>
          </ul>
          <button className="mt-4 text-red-500 hover:underline">See all</button>
        </div>
      </div>
    </div>

  )
}