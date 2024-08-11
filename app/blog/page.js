"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import Blogs from "@/components/component/blogs";
import { FAQ } from "@/components/component/faq";
import Footer from "@/components/component/footer";
import MyNavbar from "@/components/component/navbar";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use Intersection Observer to load blogs only when the section is in view
  const { ref: blogsRef, inView: blogsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

    // Fetch blogs only when they are in view
    if (blogsInView) {
      fetchBlogs();
    }
  }, [blogsInView]);
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
      <section ref={blogsRef} className="min-h-[300px]">
        {loading && blogs.length === 0 ? (
          <div className="pt-20">
            <section className="w-full pb-12 md:pb-24 text-secondary">
              <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    {/* <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div> */}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
                      Our Blogs
                    </h2>
                    <p className="max-w-[900px] text-secondary/60 text-lg">
                      Our digital marketing services are designed to help your
                      business thrive in the digital age.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-8xl lg:px-10 items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                  <div className="h-full shadow-xl animate-pulse min-h-[500px] rounded-lg"></div>
                  <div className="h-full shadow-xl animate-pulse min-h-[500px] rounded-lg"></div>
                  <div className="h-full shadow-xl animate-pulse min-h-[500px] rounded-lg"></div>
                </div>
              </div>
            </section>
          </div>
        ) : error ? (
          <div className="text-center py-40">
            <div className="size-20 border-4 text-5xl mb-5 border-secondary flex items-center justify-center rounded-[80px]">
              !
            </div>
            <div className="text-5xl font-semibold">No Internet Connection</div>
            <div className="text-xl">{error}</div>
          </div>
        ) : (
          <Blogs array={blogs} number={3} />
        )}
      </section>
      <FAQ />
      <Footer />
    </>
  );
}
