import React, { useState } from "react";

export default function CreatePostModal({ communityId, onClose, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!communityId) {
        alert("Community ID not found");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/api/communities/${communityId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, author }),
        });

        if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to create post: " + errorData.message);
        return;
        }

        const newPost = await res.json();
        onPostCreated(newPost);
        setTitle("");
        setBody("");
        setAuthor("");
    } catch (err) {
        console.error(err);
    }
    };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
