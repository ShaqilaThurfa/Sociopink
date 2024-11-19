import Product from "../db/models/products";


export async function GET(request: Request) {

  const products = await Product.findAll();

  return Response.json(products, { status: 200 });
}

// export async function POST(request: Request) {}