import User, { UserSchema } from "@/app/db/models/user"
import { errorHandler, HttpError } from "@/app/helpers/errorHandler"
import { checkPassword } from "@/app/helpers/hashingpassword"
import { signToken } from "@/app/helpers/jwt"
import { access } from "fs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"


const LoginSchema = UserSchema.pick({ email: true, password: true })

export async function POST(request: Request) {
  try {

    const body = await request.json()
    const { email, password } = LoginSchema.parse(body)

    const user = await User.findOne({ email})

    // console.log(user);

    if(!user){
      throw new HttpError("Invalid email/password", 401)
    }

    const isValidPassword = checkPassword(password, user.password)

    if(!isValidPassword){
      throw new HttpError("Invalid email/password", 401)
    }

    const token = signToken({ email: user.email, _id: user._id })

    // console.log(token);
    
    cookies().set("Authorization", `Bearer ${token}`)
    
    // return Response.json({ message: "Login success" }, { status: 200 })
    return NextResponse.json({
      accessToken: token
    })

    
  } catch (error) {
    console.log(error);
    return errorHandler(error)
  }
}