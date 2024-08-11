// app/blog/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import { useParams } from "next/navigation"; // Import useParams
import axios from "axios";
import MyNavbar from "@/components/component/navbar";
import Footer from "@/components/component/footer";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the id from the useParams hook
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Ensure that id is available before making the request

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://morph-api-server.vercel.app/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <MyNavbar />
      <section className="w-full h-[60vh] flex items-center justify-center relative pt-20 text-primary-foreground">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover brightness-50 bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Our Blogs
              </h1>
              <p className="max-w-[600px] opacity-80 md:text-xl">
                Our digital marketing agency specializes in crafting tailored
                strategies to help your business thrive in the digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-2xl min-h-screen mx-auto my-8">
        {blog ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-neutral-600 mb-2 whitespace-pre-wrap">
              {blog.content}
            </p>
            <p className="text-neutral-500 text-sm">By {blog.author}</p>
            <p className="text-neutral-500 text-sm">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </>
        ) : (
          <div>No blog found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
