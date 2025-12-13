import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommunityCard from "../parts/CommunityCard.jsx";

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

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4 mt-10 text-gray-800">
            Explore Support Communities
          </h1>
          <p className="text-gray-700">
            Find a community that resonates with you.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/giraffe_support.png"
            alt="Support"
            className="max-w-[60%] h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-6">
        <input
          type="text"
          placeholder="Search communities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-xl mb-6 bg-gray-50 focus:outline-blue-400"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map(c => (
            <Link
              key={c._id}
              to={`/community/${c._id}`}   // ✅ REAL MongoDB ID
            >
              <CommunityCard
                name={c.name}
                description={c.description}
                image={c.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
