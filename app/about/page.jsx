import { FAQ } from "@/components/component/faq";
import { Features } from "@/components/component/features";
import Footer from "@/components/component/footer";
import Lefter from "@/components/component/Lefter";
import MyNavbar from "@/components/component/navbar";
import Righter from "@/components/component/Righter";
import { BoltIcon, BriefcaseIcon, LayersIcon } from "lucide-react";

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
                Our Story
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
      <div className="min-h-screen overflow-hidden px-6 text-secondary">
        <div className="flex flex-col lg:grid max-w-7xl gap-10 mx-auto min-h-screen items-center w-full py-20 lg:grid-cols-2">
          <div className="h-full">
            <img alt="" src="/placeholder.svg" className="h-full" />
          </div>
          <div className="py-10">
            <Righter>
              <div className="text-3xl lg:text-5xl font-semibold pb-2">
                Who we are
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
      <div className="min-h-screen overflow-hidden px-6 text-secondary">
        <div className="flex flex-col-reverse lg:grid max-w-7xl gap-10 mx-auto min-h-screen items-center w-full py-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center space-y-4 py-10">
            <div className="space-y-2">
              <Lefter>
                <div className="text-3xl lg:text-5xl font-semibold pb-2">
                  What we do
                </div>
              </Lefter>
              <Lefter>
                <div className="text-lg lg:text-left opacity-80 pb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  harum quos, temporibus amet, dolore iure fugiat deleniti
                  provident non nihil, enim pariatur magnam. Quidem
                  exercitationem provident itaque dicta necessitatibus a!
                </div>
              </Lefter>
            </div>
            <div className="grid gap-4">
              <Lefter>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Website Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Easily scale your infrastructure to meet growing demands
                      and adapt to changing business needs.
                    </p>
                  </div>
                </div>
              </Lefter>
              <Lefter>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <LayersIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Digital Marketing</h3>
                    <p className="text-muted-foreground text-sm">
                      Tailor our platform to your unique business requirements
                      and workflows.
                    </p>
                  </div>
                </div>
              </Lefter>
              <Lefter>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BoltIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Business Registaration
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Experience lightning-fast response times and seamless user
                      experiences.
                    </p>
                  </div>
                </div>
              </Lefter>
            </div>
          </div>
          <div className="h-full">
            <img alt="" src="/placeholder.svg" className="h-full" />
          </div>
        </div>
      </div>
      <div className="min-h-screen overflow-hidden px-6 text-secondary">
        <div className="flex flex-col lg:grid max-w-7xl gap-10 mx-auto min-h-screen items-center w-full py-20 lg:grid-cols-2">
          <div className="h-full">
            <img alt="" src="/placeholder.svg" className="h-full" />
          </div>
          <div className="py-10">
            <Righter>
              <div className="text-3xl lg:text-5xl font-semibold pb-2">
                Why choose us
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
            <div className="grid grid-cols-3 gap-4 pb-8">
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
              <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
              </div>
            </div>
            <a
              href=""
              className="bg-primary rounded-lg px-3 py-2 text-primary-foreground"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
      {/* <Features /> */}
      <FAQ />
      <Footer />
    </>
  );
}
