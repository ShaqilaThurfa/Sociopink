import User, { UserSchema } from "@/app/db/models/user"
import { errorHandler, HttpError } from "@/app/helpers/errorHandler"



export async function POST(request: Request) {
  // const body = await request.json()

  try {
    const body = await request.json()
    const { email } = UserSchema.parse(body)

    const existingUser = await User.findOne({email})

    if(existingUser){
      throw new HttpError("Email has been registered", 401)
    }
  
    await User.create(body)

    return Response.json({ message: "Register success" }, { status: 201 })

  } catch (error) {
    console.log(error);

    return errorHandler(error)
    // if (error instanceof ZodError) {
    //   const message = error.issues[0].message.toLowerCase()
    //   return Response.json({ message }, { status: 400 })
    // }

    // if(error instanceof HttpError) {
    //   return Response.json({ message: error.message }, { status: error.status })
    // }

  }

}