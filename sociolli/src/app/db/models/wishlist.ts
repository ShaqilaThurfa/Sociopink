import { database } from "@/app/db/config"
import { HttpError } from "@/app/helpers/errorHandler"
import { Filter, ObjectId } from "mongodb"
import { z } from "zod"


export const WishListSchema = z.object({
  _id: z.instanceof(ObjectId).optional(),
  userId: z.instanceof(ObjectId, { message: "User Id is not detected" }),
  productId: z.instanceof(ObjectId, { message: "Product not found" }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional()
})

export type WishListType = z.infer<typeof WishListSchema>

export default class WishList {

  static col = database.collection<WishListType>("Wishlist")

  static async create(body: WishListType) {
    try {
      WishListSchema.parse(body)

      const wishlist = {
        "userId": new ObjectId(body.userId),
        "productId": new ObjectId(body.productId),
        "createdAt": new Date().toLocaleDateString(),
        "updatedAt": new Date().toLocaleDateString()
      }
      console.log(wishlist)
      const result = await this.col.insertOne(wishlist)

      return {
        message: "This product is added to your list",
        data: { ...wishlist, _id: result.insertedId }
      };

    } catch (error) {
      console.log(error)
    }
  }

  static async findByUser(userId: string) {

    try {

      if (!ObjectId.isValid(userId)) {
        throw new HttpError("Invalid error", 401)
      }

      const wishlistUser = await this.col.aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "wishlist",
          },
        },
        {
          $unwind: "$wishlist",
        },
      ]).toArray();

      console.log(wishlistUser);


      return wishlistUser;

    } catch (error) {
      console.log(error);

    }
  }

  static async destroyWishlist(filter: Filter<WishListType>) {
    try {
      const result = await this.col.deleteOne(filter);

      if (result.deletedCount === 0) {
        throw new HttpError("Wishlist not found", 404);
      }

      return {
        message: "Wishlist item successfully deleted",
      };
    } catch (error) {
      console.error(error);
    }
  }
}