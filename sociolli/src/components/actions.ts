"use server"

import { HttpError } from "@/app/helpers/errorHandler";
import { revalidatePath } from "next/cache"
import type { SecondArgs } from "@/app/api/products/[slug]/route";

export async function revalidateByPath(path: string){
  revalidatePath(path)
}

export async function getProductByParams(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new HttpError(errorData.message || "Failed to fetch product", 404);
  }

  const product = await response.json();
  return product;
}