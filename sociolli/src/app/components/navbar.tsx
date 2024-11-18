"use client";

import Link from "next/link";
// import { useState } from "react";


export default function Navbar() {
  
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar bg-base-100 shadow-md py-4 px-6">
      {/* Bagian Kiri */}
      <div className="flex-1 flex items-center gap-4">
        <Link href="/" className="btn btn-ghost text-xl">
          Sociolli
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full lg:w-1/2"
        />
      </div>

      
      <div className="flex gap-4 items-center">

        <Link href="/login" className="btn btn-ghost text-xl"> Login </Link>
       
        {/* <button onClick={openModal} className="btn btn-ghost text-xl">
          Login
        </button>

        
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-xl font-bold mb-4">Login</h2>
              <form>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                </div>
                <button className="btn btn-primary w-full">Login</button>
              </form>

              <button
                className="btn btn-secondary w-full mt-4"
                onClick={closeModal}
              >
                Close
              </button>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        )} */}

        
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
    </nav>
  );
}
