import React, { useState } from "react";
import { assets } from "../assets/images/assets";
import { FaSearch } from "react-icons/fa";

function Hero({ searchfood }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setQuery(term);
    searchfood(term);
  };

  return (
    <section
      className="w-full h-[55vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center z-10 px-4">
        <h1 className="text-5xl font-extrabold text-white !text-white text-center mb-4">
  Explore Meals You’ll Love
</h1>


        <p className="text-white text-lg md:text-xl mb-5 opacity-90">
          Find, order, and enjoy your favorites — all in one place.
        </p>

        <div className="relative w-full md:w-[420px] mx-auto">
  <input
    type="text"
    placeholder="Search dishes, cuisines..."
    value={query}
    onChange={handleSearch}
    className="w-full px-5 py-3 rounded-md bg-[var(--dark)] text-white placeholder-white border border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
  />
  <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70" />
</div>

      </div>
    </section>
  );
}

export default Hero;
