"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/component/footer";
import { MainPage } from "@/components/component/main-page";
import MyNavbar from "@/components/component/navbar";
import Image from "next/image";
import Blogs from "@/components/component/blogs";
import Link from "next/link";
import Portfolio from "@/components/component/porfolio";
import { portfolio, services } from "@/public/data";
import { Features } from "@/components/component/features";
import Services from "@/components/component/services";
import Bigger from "@/components/component/Bigger";
import Lefter from "@/components/component/Lefter";
import Gallery from "@/components/component/gallery";
import { FAQ } from "@/components/component/faq";

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
      <section className="w-full h-screen flex items-center justify-center relative pt-20 text-primary-foreground">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover lighter bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4 heroUp">
              <img
                alt=""
                src="logo.png"
                className="size-20 scale-150 mb-4 p-1 object-[50%] rounded-[5px] bg-primary"
              />
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Your Imigination, Our Creation
              </h1>
              <p className="max-w-[600px] opacity-80 md:text-xl">
                Our digital marketing agency specializes in crafting tailored
                strategies to help your business thrive in the digital
                landscape.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center justify-center bg-primary text-primary-foreground px-5 shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center text-secondary justify-center border border-input bg-background px-5 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services array={services} />
      <Features />
      <Portfolio array={portfolio} number={8} />
      <section
        id="about"
        className="relative mb-14 lg:mb-24 py-16 md:py-24 overflow-hidden text-primary-foreground"
      >
        <div className="absolute top-0 left-0 -z-10 blur-sm scale-105 w-full h-full bg-[url(https://aofund.org/app/uploads/2021/01/people-coffee-tea-meeting-1024x576.jpg)] bg-cover brightness-50"></div>
        <div className="container max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:gap-16">
          <div className="flex-1">
            <Lefter>
              <h2 className="text-3xl lg:text-5xl font-bold font-montserrat">
                About Us
              </h2>
              <p className="mt-4 text-base font-roboto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aliquam consectetur, ratione sint aliquid aut a
                corporis officia magnam molestias labore veritatis id voluptas
                vero nemo voluptates doloribus tempora distinctio? ratione sint
                aliquid aut a corporis officia magnam molestias labore veritatis
                id voluptas vero nemo voluptates doloribus tempora distinctio?
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="#"
                  className="rounded-lg text-primary-foreground bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </Lefter>
          </div>
          <div className="flex-1">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="About Me"
                className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#28293D] to-transparent" /> */}
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Blogs array={blogs} number={3} />
      <FAQ />
      <section
        id="contact"
        className="relative py-24 overflow-hidden text-primary-foreground"
      >
        <div className="absolute top-0 left-0 -z-10 blur-sm scale-105 w-full h-full bg-[url(https://aofund.org/app/uploads/2021/01/people-coffee-tea-meeting-1024x576.jpg)] bg-cover brightness-50"></div>
        <div className="container max-w-7xl mx-auto flex flex-col gap-4 lg:gap-6 items-center text-center justify-center px-4">
          <div className="text-2xl lg:text-4xl font-semibold uppercase">
            Ready to build your Imiginations?
          </div>
          <a
            href="#"
            className="text-lg uppercase lg:text-xl py-3 px-4 font-semibold bg-primary rounded-lg hover:bg-secondary"
          >
            Let's talk
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
