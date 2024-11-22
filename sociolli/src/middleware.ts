import * as jose from 'jose'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { errorHandler, HttpError } from './app/helpers/errorHandler';

export async function middleware(request: NextRequest) {
  try {

  console.log("masuk middleware ga?");
  console.log("Request method:", request.method)
  const authCookie = cookies().get('Authorization')
  console.log(authCookie);

  if(!authCookie){
    throw new HttpError("Invalid token, please login first!", 401)
  }

  const [type, token] = authCookie.value.split(' ')
  console.log(type, token);

  if(type !== 'Bearer' || !token){
    throw new HttpError("Invalid token", 401)
  }
  
  const secret = new TextEncoder().encode(`shhhhh`)
  const result = await jose.jwtVerify<{ _id: string, email: string}>(token, secret)

  console.log(result);
  
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('x-user-id', result.payload._id)
  requestHeaders.set('x-user-email', result.payload.email)

  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  } catch (error) {
    console.log(error);
    return errorHandler(error)
  }
  
}

export const config = {
  matcher: '/api/wishlist',
}