import { database } from "@/app/db/config"
import { ObjectId, Filter } from "mongodb"
import {hashPassword} from "@/app/helpers/hashingpassword"
import { z } from "zod"



// type UserType = {
//   _id: ObjectId
//   name: string
//   username: string
//   email: string
//   password: string
// }

export const UserSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Password must be at least 5 characters long" })
})

type UserType = z.infer<typeof UserSchema>

export default class User {

  static col = database.collection<UserType>("users")

  static async create(body: UserType){

    UserSchema.parse(body)

    body.password = hashPassword(body.password)
    // console.log(body.password);
    await this.col.insertOne(body)
  }

  static async findOne(filter: Filter<UserType>){
    return await this.col.findOne(filter)
  }
}