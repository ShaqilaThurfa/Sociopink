import Product from "../../db/models/products";
import { errorHandler } from "../../helpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = 10;

  try {
    const products = await Product.findAll(page, limit);

    
    return NextResponse.json(products, {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return errorHandler(error);
  }
}
