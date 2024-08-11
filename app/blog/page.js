"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "@/components/component/blogs";
import { FAQ } from "@/components/component/faq";
import Footer from "@/components/component/footer";
import MyNavbar from "@/components/component/navbar";
import { portfolio } from "@/public/data";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          "https://morph-api-server.vercel.app/api/blogs"
        );
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="loading fixed z-[9999] w-full h-full top-0 left-0 bg-primary flex items-center justify-center">
        <img
          alt=""
          src="https://i.imgur.com/crtpq5D.png"
          className="loadingIcon size-56 me-2 object-cover rounded-[40px] duration-300 bg-primary p-1"
        />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <div className="size-20 border-4 text-5xl mb-5 border-secondary flex items-center justify-center rounded-[80px]">!</div>
        <div className="text-5xl font-semibold">No Internet Connection</div>
        <div className="text-xl">{error}</div>
      </div>
    );
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
      <Blogs array={blogs} />
      <FAQ />
      <Footer />
    </>
  );
}
