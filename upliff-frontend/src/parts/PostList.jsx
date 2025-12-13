import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiSprout } from "react-icons/gi";

export default function PostList({ posts }) {
  if (!posts || posts.length === 0) return <p className="text-gray-500">No posts yet!</p>;

  // Sort posts newest → oldest
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const [likedPosts, setLikedPosts] = useState({}); // { postId: true/false }

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {sortedPosts.map((post) => (
        <div
          key={post._id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col gap-4"
        >
          {/* Post Content */}
          <Link to={`/community/${post.communityId}/post/${post._id}`}>
            <h3 className="font-bold text-lg text-gray-800 hover:underline">{post.title}</h3>
            <p className="text-gray-700 mt-1">{post.body}</p>
          </Link>

          {/* Footer: Author, Date, Actions */}
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <p>By {post.author} • {new Date(post.createdAt).toLocaleString()}</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleLike(post._id)}
                className={`flex items-center gap-1 text-green-600 hover:text-green-800 transition`}
              >
                <GiSprout size={18} />
                {likedPosts[post._id] ? "Liked" : "Like"}
              </button>
              <p>{post.commentsCount || 0} comments</p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
