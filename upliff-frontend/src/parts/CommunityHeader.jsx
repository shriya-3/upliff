import React from "react";
import { FiUsers, FiCalendar } from "react-icons/fi";

export default function CommunityHeader({ id, name, description, members, created, image, onCreatePost }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-6 border border-gray-200">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        {/* Left column: Text + buttons */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex flex-col text-gray-500 text-sm mt-4 gap-2">
              <div className="flex items-center gap-2">
                <FiCalendar size={16} />
                <span>Created {new Date(created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Buttons below the text */}
          <div className="flex gap-3 mt-4">
            {/*<button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => alert("Joining community...")}
            >
              Join Community
            </button>*/}

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={onCreatePost} // Just trigger the modal in parent
            >
              Create Post
            </button>
          </div>
        </div>

        {/* Right column: Image */}
        {image && (
          <div className="flex justify-center lg:justify-end">
            <img
              src={image}
              alt={`${name} icon`}
              className="w-56 h-56 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
