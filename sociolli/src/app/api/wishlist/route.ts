import WishList, { WishListSchema } from "@/app/db/models/wishlist";
import { errorHandler, HttpError } from "@/app/helpers/errorHandler";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";




export async function GET(request: NextRequest) {
  try {

    const userId = request.headers.get('x-user-id')

    if (!userId) {
      throw new HttpError( "userId is missing in headers", 401);
    }
    // const { userId } = await request.json()

    console.log(userId, 'ini apa');

    const userWishlist = await WishList.findByUser(userId);

   
    if (!userWishlist || userWishlist.length === 0) {
      return Response.json({ message: "No wishlist found for this user" }, { status: 404 });
    }
    
    return  Response.json(userWishlist, { status: 200})
  } catch (error) {
    console.error(error);
    return errorHandler(error)
  }
}




export async function POST(request: NextRequest) {

  try {

    // console.log("user yang akses", request.headers.get('x-user-id'));
    // console.log("user yang akses", request.headers.get('x-user-email'));

    const userId = request.headers.get('x-user-id')

    if (!userId) {
      throw new HttpError( "userId is missing in headers", 401);
    }
  
    const { productId} = await request.json()
    console.log(userId, productId);
    
    // const { userId, productId } = WishListSchema.parse(body)

    const existingproduct = await WishList.findOne({
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
    });

    if (existingproduct) {
      throw new HttpError("This product has already been added to your wishlist", 409);
    }

    const wishListUser = await WishList.create({ userId: new ObjectId(userId), productId: new ObjectId(productId)})

    return Response.json(wishListUser, { status: 200 });

  } catch (error) {
    console.log(error);
    return errorHandler(error)
  }
}

// export async function POST(request: Request) {}