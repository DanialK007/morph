import Bigger from "@/components/component/Bigger";
import Blogs from "@/components/component/blogs";
import { FAQ } from "@/components/component/faq";
import Footer from "@/components/component/footer";
import { MainPage } from "@/components/component/main-page";
import MyNavbar from "@/components/component/navbar";
import Portfolio from "@/components/component/porfolio";
import { FaCheckCircle } from "react-icons/fa";
import { services } from "@/public/data";
import { BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Feedback } from "@/components/component/Feedback";
import { FaCircleInfo } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <MyNavbar />
      <section className="w-full h-[60vh] flex items-center justify-center relative pt-20 text-primary-foreground">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover brightness-50 bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Our Services
              </h1>
              <p className="max-w-[600px] opacity-80 md:text-xl">
                Morph - Digital Marketing တွင် ရရှိနိုင်သော Service များ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="w-full py-12 md:pt-24 bg-primary-foreground text-secondary"
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
                Our Services
              </h2>
              <p className="max-w-[900px] text-secondary/60 text-lg">
                Our digital marketing services are designed to help your
                business thrive in the digital age.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 py-12 lg:grid-cols-3 lg:gap-10">
            {services.map((service, index) => (
              <Bigger>
                <div
                  key={index}
                  className="rounded-lg group shadow-md h-[550px] relative h-ful duration-300 overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt=""
                    className="absolute group-hover:brightness-50 group-hover:scale-105 duration-500 top-0 left-0 w-full h-full object-left object-cover"
                  />
                  <button
                    title="more info"
                    className="absolute top-3 right-3 text-secondary/40 text-2xl z-20 group-hover:text-primary-foreground duration-500"
                  >
                    <FaCircleInfo />
                  </button>
                  <div className="absolute p-5 top-0 left-0 w-full z-10 bg-gradient-to-t from-secondary/90 to-secondary/0 from-[10%] to-[50%] h-full flex flex-col justify-end text-primary-foreground">
                    <h3 className="text-2xl font-semibold pb-1">
                      {service.title}
                    </h3>
                    <div className="leading-4 text-sm pb-5">
                      {service.description}
                    </div>
                    <Link
                      href={service.url}
                      className="bg-primary hover:bg-primary/80 duration-300 text-sm px-3 leading-6 w-fit rounded-[30px] uppercase"
                    >
                      View services
                    </Link>
                  </div>
                </div>
              </Bigger>
            ))}
          </div>
        </div>
      </section>
      <Feedback />
      <FAQ />
      <Footer />
    </>
  );
}
