import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CommunityHeader from "../parts/CommunityHeader";
import PostList from "../parts/PostList";
import CreatePostModal from "../parts/CreatePost";

export default function CommunityPage() {
  const { id } = useParams(); // community _id from URL
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch community
  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/api/communities/${id}`)
      .then((res) => res.json())
      .then((data) => setCommunity(data))
      .catch((err) => console.error("Error fetching community:", err));
  }, [id]);

  // Fetch posts
  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/api/communities/${id}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error fetching posts:", err));
  }, [id]);

  // Callback for newly created post
  const handlePostCreated = (newPost) => {
    setPosts((prev) => [newPost, ...prev]); // Add post at top
    setIsModalOpen(false); // Close modal
  };

  if (!community) {
    return <div className="text-center mt-20 text-gray-600">Loading community...</div>;
  }

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="mt-12 max-w-5xl mx-auto px-6 py-6">
        {/* Inline back button next to community header */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/support")}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            ← Back
          </button>
        </div>
        
        <CommunityHeader
          id={community._id}
          name={community.name}
          description={community.description}
          members={community.members}
          created={community.created}
          image={community.image}
          onCreatePost={() => setIsModalOpen(true)} // opens modal
        />

        <PostList posts={posts} />

        {isModalOpen && (
          <CreatePostModal
            communityId={community._id}
            onClose={() => setIsModalOpen(false)}
            onPostCreated={handlePostCreated} // updates posts dynamically
          />
        )}
      </div>
    </div>
  );
}
