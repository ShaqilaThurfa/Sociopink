import { ProductType } from '@/app/db/models/products'
import AddToWishList from "./addToWishList"

type DetailProductProps = {
  product: ProductType
}

export default function DetailProduct({ product }: DetailProductProps) {
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap md:flex-nowrap justify-start items-start gap-x-8 gap-y-8">
     
      <div className="flex-1 space-y-4">
        <div className="relative">
          <img
            src={product.images[0]}
            alt="Main Product"
            className="w-full rounded-md"
          />
        </div>
        <div className="flex gap-2">
          {product.images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-red-500"
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        <h1 className="font-sans font-bold text-xl uppercase tracking-[0.2em] text-black">
          {product.name}
        </h1>

        <p className="font-sans font-normal text-base text-gray-600">
          {product.excerpt}
        </p>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap my-4">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block font-sans font-bold text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-md mx-1"
                style={{ backgroundColor: "#fedfe2" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="font-sans text-base text-gray-700">
          {product.description}
        </p>

        <p
          className="text-2xl font-bold"
          style={{
            fontFamily: "Lato, sans-serif",
            color: "#da2a52",
          }}
        >
          Rp. {product.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-2">
          <AddToWishList productId={product._id} />
        </div>
      </div>
    </div>
  );
}
