import jwt, { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";
import { ObjectId } from "mongodb";


const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}


export interface TokenPayload {
  _id: ObjectId;
  email: string;
  
}

export const signToken = (payload: TokenPayload, options?: SignOptions): string => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is required for signing the token");
  }
  return jwt.sign(payload, JWT_SECRET, options);
};


export const verifyToken = (token: string, options?: VerifyOptions): JwtPayload | string => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is required for verifying the token");
  }
  return jwt.verify(token, JWT_SECRET, options);
};
