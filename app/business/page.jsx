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
        <div className="absolute bg-[url('https://internetdevels.com/sites/default/files/public/blog_preview/why_does_a_software_company_need_a_professional_services_team_0.jpg')] top-0 left-0 w-full h-full -z-10 bg-cover bg-center brightness-50 bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Business Registration Services
              </h1>
              <p className="max-w-[600px] opacity-80 md:text-xl">
                Morph - Digital Marketing တွင် ရရှိနိုင်သော Website Service များ
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
              Morph တွင် ရရှိနိုင်သော Business Registration Service များ
            </div>
            <div className="">
              ဝဘ်ဆိုက်တွင် မိမိဖော်ပြလိုသည့် ရည်ရွယ်ချက်၊
              လုပ်ဆောင်နိုင်စွမ်းနှင့် အကြောင်းအရာများပေါ် မူတည်ပြီး
              ဝဘ်ဆိုက်များကို အမျိုးအစားအလိုက် ရေးဆွဲပေးပါတယ်ရှင်။
            </div>
            <div className="grid grid-cols-3 gap-5 py-8">
              {businessRegistrationServices.map((business, index) => (
                <Bigger>
                  <div className="">
                    <img
                      src={business.img}
                      alt=""
                      className="h-56 w-full object-cover object-top"
                    />
                    <div className="flex flex-col justify-center py-5">
                      <div className="text-xl font-semibold">
                        {business.category}
                      </div>
                      <div className="py-2">
                        {business.services.map((service, number) => (
                          <div key={service.number} className="pb-2">
                            <FaCheckCircle className="text-lg text-primary me-2 inline" />
                            <div className="inline">{service}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Bigger>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Portfolio array={portfolio} /> */}
      <FAQ />
      <Footer />
    </>
  );
}
