import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, content, author };

    try {
      const res = await axios.post(
        "https://morph-api-server.vercel.app/api/blogs",
        newBlog
      );
      addBlog(res.data); // Add new blog to the list
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (err) {
      console.error("Error creating blog:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-8">
      <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
      <div className="mb-4">
        <label className="block text-neutral-500">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-primary-foreground border rounded-lg outline-none rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-neutral-500">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 bg-primary-foreground border rounded-lg outline-none rounded h-32 resize-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-neutral-500">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 bg-primary-foreground border rounded-lg outline-none rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#75b7f5] text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
