import Link from "next/link"

//http://localhost:3000/api/users/register

export default function Page() {

  

  return (
    <div className="my-8 gap-6 max-w-sm mx-auto">
     
      <p className="mb-2">Username</p>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          values="username"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Enter your username" />
      </label>

    
      <p className="mb-2">Name</p>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          values="name"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Enter your name" />
      </label>

   
      <p className="mb-2">Email</p>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          name="email"
        >
          <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.08-.53A.5.5 0 0 0 4 4.5v7a.5.5 0 0 0 .92.33L8 8.28l3.08 3.55A.5.5 0 0 0 12 11.5v-7a.5.5 0 0 0-.92-.33L8 7.72 4.92 3.47Z" />
        </svg>
        <input type="email" className="grow" placeholder="Enter your email" />
      </label>

      
      <p className="mb-2">Password</p>
      <label className="input input-bordered flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          values="password"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow" placeholder="Enter your password" />
      </label>

   
      <button className="btn btn-primary w-full mb-4"  
                style={{
                fontFamily: "Lato, sans-serif",
                backgroundColor: "#da2a52",
                color:"white"
              }}>Submit</button>

    
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>

  )
}
