"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="btn btn-ghost text-xl">
        Login
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
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
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
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
      )}
    </>
  );
}
