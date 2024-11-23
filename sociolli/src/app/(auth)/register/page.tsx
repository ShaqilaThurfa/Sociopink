"use client";

import SociollaTitle from "@/components/sociolla";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'



export default function Page() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); 
        throw new Error(errorData.message); 
      }

      const data = await res.json();
      console.log("Success:", data);
      Swal.fire({
        title: "Success!",
        text: `${data.message}`,
        timer: 2000,
      })

      router.push('/login')

    } catch (error) {
      console.error("Error:", error);
      if(error instanceof Error){
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        })
      }
    }
  };

  return (
    <>

      <div className="mx-5">
        <SociollaTitle />
      </div>


      <div className="my-8 gap-6 max-w-sm mx-auto">


        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

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
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
      </>
  );
}
