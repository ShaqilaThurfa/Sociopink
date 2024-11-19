import react from "react"
import {ProductType} from '@/app/db/models/products'

type DetailProductProps = {
  product: ProductType
}

export default function DetailProduct({ product }: DetailProductProps) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.images[0]}
          alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <h2 className="card-title">{product.excerpt}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  )
}