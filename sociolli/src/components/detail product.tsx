
import { ProductType } from '@/app/db/models/products'
import AddToWishList from "./addToWishList"

type DetailProductProps = {
  product: ProductType
}

export default function DetailProduct({ product }: DetailProductProps) {
  return (
    <div className="max-w-5xl mx-10 flex flex-wrap md:flex-nowrap justify-evenly items-stretch gap-x-4 gap-y-4">
      <div className="flex-1 space-y-4">
        <div className="relative">
          <img
            src={product.images[0]}
            alt="Main Product"
            className="w-full rounded-md"
          />
        </div>
        <div className="flex gap-2">
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

      <div className="flex-1 md:ml-8 mt-10 md:mt-0 gap-y-18">
        <h1 className="font-sans font-bold text-[-17px] uppercase tracking-[0.2em] text-black">
          {product.name}
        </h1>

        <h1 className="font-sans font-normal text-[16px] text-gray">
          {product.excerpt}
        </h1>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap my-8">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block font-sans font-bold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-[10px] mx-1"
                style={{ backgroundColor: "#fedfe2"}}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="my-8">
        <p className="font-sans text-[16px] text-gray">{product.description}</p>
        </div>

        <div className="my-8">
          <p className="text-[20px] font-bold leading-[22px]" 
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#da2a52",
              }} >Rp. {product.price.toLocaleString("id-ID")}</p>
          
        </div>

        <div className="flex">
          <AddToWishList/> 
          </div>
      
      </div>

      {/* <div className="flex-1 md:ml-8 mt-10 md:mt-0 gap-y-18">
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
        </div> */}
    </div>

  )
}