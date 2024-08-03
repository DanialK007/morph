import { FAQ } from "@/components/component/faq";
import { Features } from "@/components/component/features";
import Footer from "@/components/component/footer";
import MyNavbar from "@/components/component/navbar";
import Righter from "@/components/component/Righter";

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
      <div className="min-h-screen">
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
      </div>
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
