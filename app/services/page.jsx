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
      <div className="min-h-screen pt-10">
        <div className="grid relative max-w-7xl mx-auto lg:grid-cols- 2 pt-20 p-5 gap-10">
          <div id="web" className="absolute -top-10"></div>
          {/* <div className="h-full rounded-[20px]">
            <img src="/features.svg" alt="" className="h-full" />
          </div> */}
          <div className="h-full flex flex-col gap-5 justify-center">
            <div className="text-xl lg:text-3xl font-semibold">
              Website အမျိုးအစားများနှင့် Morph တွင် ရရှိနိုင်သော Website
              Development Service များ
            </div>
            <div className="">
              ဝဘ်ဆိုက်တွင် မိမိဖော်ပြလိုသည့် ရည်ရွယ်ချက်၊
              လုပ်ဆောင်နိုင်စွမ်းနှင့် အကြောင်းအရာများပေါ် မူတည်ပြီး
              ဝဘ်ဆိုက်များကို အမျိုးအစားအလိုက် ရေးဆွဲပေးပါတယ်ရှင်။
            </div>
            {websiteTypes.map((web, index) => (
              <Bigger>
                <div className="py-8">
                  <div className="grid lg:grid-cols-3">
                    <div className="flex justify-center">
                      <img
                        src={web.img}
                        alt=""
                        className="h-56 aspect-[5/3] object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col justify-center lg:col-span-2 p-5">
                      <div className="text-3xl">{web.type}</div>
                      <div className="">{web.description}</div>
                    </div>
                  </div>
                </div>
              </Bigger>
            ))}
          </div>
        </div>
        <div className="grid relative max-w-7xl mx-auto lg:grid-cols- 2 pt-20 p-5 gap-10">
          <div id="business" className="absolute -top-10"></div>
          {/* <div className="h-full rounded-[20px]">
            <img src="/features.svg" alt="" className="h-full" />
          </div> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="">
              <div className="sticky top-64 left-0 w-full bg-primary h-[350px]"></div>
            </div>
            <div className="">
              <div className="text-xl lg:text-3xl font-semibold pb-4">
                Morph တွင် ရရှိနိုင်သော Business Registration Service များ
              </div>
              <div className="pb-5">
                ဝဘ်ဆိုက်တွင် မိမိဖော်ပြလိုသည့် ရည်ရွယ်ချက်၊
                လုပ်ဆောင်နိုင်စွမ်းနှင့် အကြောင်းအရာများပေါ် မူတည်ပြီး
                ဝဘ်ဆိုက်များကို အမျိုးအစားအလိုက် ရေးဆွဲပေးပါတယ်ရှင်။
              </div>
              <div className="grid grid-cols- 4 gap-y-5">
                {businessRegistrationServices.map((busniess, index) => (
                  <Bigger>
                    {/* <div className="flex flex-col justify-center lg:col-span-2 p-5">
                        <div className="text-2xl pb-1">{busniess.service}</div> */}
                    <div className="flex items-center gap-5">
                      <FaCheckCircle className="text-primary" />{" "}
                      {busniess.description}
                    </div>
                    {/* </div> */}
                  </Bigger>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid relative max-w-7xl mx-auto lg:grid-cols-2 pt-20 p-5 gap-10">
        <div id="digital" className="absolute -top-10"></div>
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
