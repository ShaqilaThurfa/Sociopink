'use client'

import { HttpError } from "@/app/helpers/errorHandler"
import SociollaTitle from "@/components/sociolla"
import Cookies from 'js-cookie'
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"

import { useState } from "react"
import Swal from "sweetalert2"


export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json() as { message?: string, accessToken?: string}  

      // console.log("Success:", data);
      if (!res.ok && data.message) {
        const errorData = await res.json(); 
        throw new Error(errorData.message); 
      }

      // console.log(data.accessToken);
      
      Cookies.set('Authorization', `Bearer ${data.accessToken}`, { expires: 7 })

      // console.log(Cookies);
      

      Swal.fire({
        title: "Success!",
        text: "Login success",
        timer: 2000,
      })

      router.push('/')
    } catch (error) {
      console.log("Error:", error);

      if(error instanceof Error){
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        })
      }
      
      
    }
  }

  return (
    <>

      <div className="mx-5">
        <SociollaTitle />
      </div>

      <div className="my-8 gap-6 max-w-sm mx-auto">


        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 text-white bg-pink-600 rounded hover:bg-pink-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-pink-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </>
  )
}

