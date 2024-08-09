import Bigger from "@/components/component/Bigger";
import Blogs from "@/components/component/blogs";
import { FAQ } from "@/components/component/faq";
import Footer from "@/components/component/footer";
import { MainPage } from "@/components/component/main-page";
import MyNavbar from "@/components/component/navbar";
import Portfolio from "@/components/component/porfolio";
import { FaCheckCircle } from "react-icons/fa";
import {
  businessRegistrationServices,
  portfolio,
  websiteTypes,
} from "@/public/data";
import { BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Feedback } from "@/components/component/Feedback";

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
      
      {/* <Portfolio array={portfolio} /> */}
      <Feedback />
      <FAQ />
      <Footer />
    </>
  );
}
