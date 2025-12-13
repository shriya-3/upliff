import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post, communityId }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <Link to={`/community/${communityId}/post/${post._id}`}>
        <h3 className="text-lg font-bold">{post.title}</h3>
      </Link>
      <p className="text-gray-500 text-sm">by {post.author}</p>
      <p className="text-gray-700 mt-2 line-clamp-3">{post.body}</p>
    </div>
  );
}
