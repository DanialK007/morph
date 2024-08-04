import Bigger from "@/components/component/Bigger";
import Blogs from "@/components/component/blogs";
import { FAQ } from "@/components/component/faq";
import Footer from "@/components/component/footer";
import { MainPage } from "@/components/component/main-page";
import MyNavbar from "@/components/component/navbar";
import Portfolio from "@/components/component/porfolio";
import { portfolio } from "@/public/data";
import { BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                Our digital marketing agency specializes in crafting tailored
                strategies to help your business thrive in the digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen pt-10">
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 pt-20 p-5 gap-10">
          <div className="h-full rounded-[20px]">
            <img src="/features.svg" alt="" className="h-full" />
          </div>
          <div className="h-full flex flex-col gap-5 justify-center">
            <div className="text-3xl lg:text-5xl font-semibold">
              Website Development
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ex eveniet quas harum quos perferendis ad amet. Consectetur,
              eveniet earum eaque eligendi maxime eos qui, porro nemo asperiores
              facilis veniam.
            </div>
            <div className="grid grid-cols-3 gap-4 pb-8">
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
            </div>
          </div>
        </div>
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 pt-20 p-5 gap-10">
          <div className="h-full flex flex-col gap-5 justify-center">
            <div className="text-3xl lg:text-5xl font-semibold">
              Digital Marketing
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ex eveniet quas harum quos perferendis ad amet. Consectetur,
              eveniet earum eaque eligendi maxime eos qui, porro nemo asperiores
              facilis veniam.
            </div>
            <div className="grid grid-cols-3 gap-4 pb-8">
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
            </div>
          </div>
          <div className="h-full rounded-[20px]">
            <img src="/finance.svg" alt="" className="h-full" />
          </div>
        </div>
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 pt-20 p-5 gap-10">
          <div className="h-full rounded-[20px]">
            <img src="/interview.svg" alt="" className="h-full" />
          </div>
          <div className="h-full flex flex-col gap-5 justify-center">
            <div className="text-3xl lg:text-5xl font-semibold">
              Business Registration
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ex eveniet quas harum quos perferendis ad amet. Consectetur,
              eveniet earum eaque eligendi maxime eos qui, porro nemo asperiores
              facilis veniam.
            </div>
            <div className="grid grid-cols-3 gap-4 pb-8">
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
              <Bigger>
                <div className="p-5 border-2 border-primary rounded-lg text-primary flex flex-col text-center justify-center items-center">
                  <BriefcaseIcon className="h-6 w-6" />
                  <div className="">Qualified Market</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.
                  </div>
                </div>
              </Bigger>
            </div>
          </div>
        </div>
      </div>
      <Portfolio array={portfolio} />
      <FAQ />
      <Footer />
    </>
  );
}
