import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommunityCard from "../parts/CommunityCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Support() {
  const [search, setSearch] = useState("");
  const [communities, setCommunities] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/communities`)
      .then(res => res.json())
      .then(data => setCommunities(data))
      .catch(err => console.error(err));
  }, []);

  const filteredCommunities = communities.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("Filtered Communities:", filteredCommunities);
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-16 font-lexend min-h-screen">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl text-darkGreen1 md:text-6xl font-bold mb-4 mt-10">
            Explore Support Communities
          </h1>
          <p className="text-gray-700 text-base md:text-2xl leading-relaxed">
            Find a community that resonates with you.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-end">
          <img
            src="/giraffe_support.png"
            alt="Support"
            className="max-w-[60%] h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        {/* SEARCH BAR */}
<div className="flex justify-center mb-8">
  <div className="relative w-full ">

    {/* Icon */}
    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>

    {/* Input */}
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Communities"
      className="
        w-full
        h-full
        pl-12
        pr-6
        py-4
        rounded-full
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-darkGreen1
        text-darkGreen1
        placeholder-gray-400
        bg-white
        shadow-sm
      "
    />

  </div>
</div>

        {filteredCommunities.length === 0 && search !== "" ? (

  /* NO RESULTS */
  <div className="flex flex-col items-center justify-center h-[250px] text-darkGreen1 mt-[70px]">
    <p className="text-2xl font-semibold mb-2 ">No results found</p>
    <p className="opacity-70 mb-4">
      Try searching for another community
    </p>
    <img
      src="/noResult.png"
      alt="No results"
      className="w-[180px] opacity-80"
    />
  </div>

) : (

  /* GRID */
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredCommunities.map(c => (
      <Link key={c._id} to={`/community/${c._id}`}>
        <CommunityCard
          name={c.name}
          description={c.description}
          id={c._id}
          image={c.image}
        />
      </Link>
    ))}
  </div>

)}

      </div>
    </div>
  );
}
