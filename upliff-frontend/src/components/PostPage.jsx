import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostPage() {
  const { id, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch post
  useEffect(() => {
    fetch(`${API_URL}/api/communities/${id}/posts/${postId}`)
      .then((res) => res.json())
      .then(setPost)
      .catch(console.error);
  }, [id, postId]);
  
  // Fetch comments
  useEffect(() => {
    fetch(`${API_URL}/api/posts/${postId}/comments`)
      .then((res) => res.json())
      .then(setComments)
      .catch(console.error);
  }, [postId]);

  // Add a new comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!author || !body) return;

    try {
      const res = await fetch(`${API_URL}/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, body }),
      });
      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]); // dynamically update
      setAuthor("");
      setBody("");
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <div className="bg-cream text-center mt-20">Loading post...</div>;

  return (
  <div className="min-h-screen bg-cream mt-14">
    <div className="max-w-3xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate(`/community/${id}`)}
        className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
      >
        ← Back to Community
      </button>

      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-1">{post.body}</p>
      <p className="text-gray-400 text-sm mb-6">By {post.author}</p>

      {/* Comments */}
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <div className="flex flex-col gap-3 mb-6">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c._id} className="border rounded p-3 bg-gray-50">
              <p className="text-gray-700">{c.body}</p>
              <p className="text-sm text-gray-400">By {c.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>

      {/* Add comment */}
      <form onSubmit={handleAddComment} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Write a comment..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  </div>
);
}