export default function DeleteWishlist() {
  return (
    <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6h18M9 6v12m6-12v12M4 6a1 1 0 011-1h14a1 1 0 011 1M4 6a1 1 0 01-1 1M20 6a1 1 0 01-1-1"
        />
      </svg>
    </button>
  )
}