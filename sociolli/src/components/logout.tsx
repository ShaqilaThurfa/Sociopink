"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default function Logout(){
  return(
    <form action={async()=> {
      cookies().delete('Authorization')
      redirect('/')
    }}>
      <button>Logout</button>
      </form>
  )
}