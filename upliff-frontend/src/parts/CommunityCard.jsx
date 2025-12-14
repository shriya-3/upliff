import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommunityCard({ name, description, id, image }) {
  const navigate = useNavigate();
  console.log("CommunityCard id:", id);

  return (
    <div
      onClick={() => navigate(`/community/${id}`)}
      className="relative bg-white shadow-md rounded-xl p-4 cursor-pointer transition hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Text */}
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      {/* Bottom-right image */}
      {image && (
        <img
          src={image}
          alt={`${name} icon`}
          className="absolute bottom-4 right-4 w-24 h-24 object-cover"
        />
      )}

      {/* Optional button */}
      <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
        View
      </button>
    </div>
  );
}
