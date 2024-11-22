import React from "react";

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({ query, setQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center my-4"> 
    <input
      type="text"
      placeholder="Search products..."
      className="input input-bordered w-full lg:w-1/2 h-10 placeholder-white"
      value={query}
      onChange={handleInputChange}
      style={{
        backgroundColor: "#da2a52",
        color: "white",
      }}
    />
    </div>
  );
};

export default SearchComponent;
