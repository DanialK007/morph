import Bigger from "@/components/component/Bigger";
import { FAQ } from "@/components/component/faq";
import { Features } from "@/components/component/features";
import Footer from "@/components/component/footer";
import MyNavbar from "@/components/component/navbar";
import Righter from "@/components/component/Righter";
import { BriefcaseIcon } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaTelegram, FaTiktok, FaViber } from "react-icons/fa6";
import MessageForm from "@/components/component/MessageForm";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <section className="w-full h-[60vh] flex items-center justify-center relative pt-20 text-primary-foreground">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover brightness-50 bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Contact Us
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
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto p-10">
          <div className="text-4xl lg:text-5xl font-semibold">
            Our Platforms
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
            <Bigger>
              <a target="_blank" href="https://www.facebook.com/morphwebsiteanddigitalmarketing?mibextid=LQQJ4d" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <FaFacebook className="size-14" />
                <div className="text-2xl font-semibold">Facebook</div>
              </a>
            </Bigger>
            <Bigger>
              <a target="_blank" href="https://www.linkedin.com/company/morphwebsiteanddigitalmarketing/" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <FaLinkedin className="size-14" />
                <div className="text-2xl font-semibold">LinkedIn</div>
              </a>
            </Bigger>
            <Bigger>
              <a target="_blank" href="https://invite.viber.com/?g2=AQAgAG9pwjGLolMltWVlDjneT1ei5C0j6vSIc0NBjm%2FTxaO4nZQM1jJVi3jBPHmy" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <FaViber className="size-14" />
                <div className="text-2xl font-semibold">Viber</div>
              </a>
            </Bigger>
            <Bigger>
              <a target="_blank" href="https://t.me/websitemyanmar" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <FaTelegram className="size-14" />
                <div className="text-2xl font-semibold">Telegram</div>
              </a>
            </Bigger>
            <Bigger>
              <a target="_blank" href="https://www.tiktok.com/@digitalmarketingmyanmar" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <FaTiktok className="size-14" />
                <div className="text-2xl font-semibold">TikTok</div>
              </a>
            </Bigger>
            <Bigger>
              <a target="_blank" href="morphwebsite.digitalmarketing@gmail.com" className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                {/* <BriefcaseIcon className="size-20" /> */}
                <SiGmail className="size-14" />
                <div className="text-2xl font-semibold">Gmail</div>
              </a>
            </Bigger>
            {/* <Bigger>
              <div className="p-8 border-2 border-primary rounded-lg text-primary flex flex-col gap-2 text-center justify-center items-center">
                <BriefcaseIcon className="size-20" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div className="text-2xl font-semibold">Facebook</div>
              </div>
            </Bigger> */}
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen">
        <div className="grid max-w-7xl mx-auto min-h-screen items-center w-full py-20 lg:grid-cols-2">
          <div className="h-full">
            <img alt="" src="/placeholder.svg" className="h-full" />
          </div>
          <div className="p-10">
            <Righter>
              <div className="text-3xl lg:text-5xl font-semibold pb-2">
                Creative Digital Marketer
              </div>
            </Righter>
            <Righter>
              <div className="text-lg lg:text-left opacity-80 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                harum quos, temporibus amet, dolore iure fugiat deleniti
                provident non nihil, enim pariatur magnam. Quidem exercitationem
                provident itaque dicta necessitatibus a!
              </div>
            </Righter>
            <Righter>
              <div className="text-lg lg:text-left opacity-80 pb-5">
                Lorem ipsum dolor sit amet consectetur adporibus amet, dolore
                iure fugiat deleniti provident non nihil, enim pariatur magnam.
                Quidem exercitationem provident itaque dicta necessitatibus a!
              </div>
            </Righter>
            <a
              href=""
              className="bg-primary rounded-lg px-3 py-2 text-primary-foreground"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div> */}
      <div className="py-10 bg-muted">
        <MessageForm />
      </div>
      <Footer />
    </>
  );
}
