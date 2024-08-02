import React from "react";
import Bigger from "./Bigger";

function Blogs({ array, number }) {
  return (
    <div className="pt-20">
      <section className="w-full pb-12 md:pb-24 bg-primary-foreground text-secondary">
        <div className="container px-4 md:px-6">
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
          <div className="mx-auto grid max-w-8xl lg:px-10 items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {array.slice(0, number).map((item, index) => (
              <Bigger>
                <div className="shadow-md rounded-lg border border-primary/10 overflow-hidden h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
                  <div className="relative">
                    {/* <BsGlobe className="h-8 w-8 text-primary" />   */}
                    <img
                      className="w-full aspect-[4/3] object-cover bg-primary/20"
                      src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2024/02/image1-6.png"
                      alt="Image 1"
                    />
                    <div className="absolute top-2 right-2 bg-primary px-1 text-xs leading-6 text-primary-foreground rounded-md">
                      Digital Marketing
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Marketing Power</h3>
                    <p className="opacity-60 pt-2">
                      Optimize your website to rank higher in search engine
                      results and drive more organic traffic.
                    </p>
                    <a
                      href="#"
                      className="pt-2 text-sm block w-fit ms-auto font-semibold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </Bigger>
            ))}
            ;
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
