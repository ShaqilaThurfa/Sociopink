import Product from "@/app/db/models/products"

export type SecondArgs = {
  params: {
    slug: string
  }
}


export async function GET(request: Request, { params} : SecondArgs) {

  const product = await Product.findBySlug(params.slug)

  return Response.json(product, { status: 200 })
}

// export async function POST(request: Request) {}