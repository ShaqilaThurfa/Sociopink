import { database } from "../config";

export type ProductType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export default class Product{
  static col = database.collection<ProductType>("products");

  static async findAll(page = 1, limit = 10): Promise<ProductType[]>{
    const skip = (page - 1) * limit;
    return await this.col.find().skip(skip).limit(limit).toArray();
    
  }

  static async findBySlug(slug: string){
    return await this.col.findOne({ slug });
  }
}
