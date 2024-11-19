import { database } from "../config";

export type ProductType = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  image: string[];
  createdAt: string;
  updatedAt: string;
}

export default class Product{
  static col = database.collection<ProductType>("products");

  static async findAll(){
    return await this.col.find().toArray();
  }

  static async findBySlug(slug: string){
    return await this.col.findOne({ slug });
  }
}
