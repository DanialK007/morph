import React from "react";
// import { Button } from '../ui/button'
import { FaCircleInfo } from "react-icons/fa6";
import Bigger from "./Bigger";
import Link from "next/link";

function Services({ array }) {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 bg-primary-foreground text-secondary"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
              Our Services
            </h2>
            <p className="max-w-[900px] text-secondary/60 text-lg">
              Our digital marketing services are designed to help your business
              thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {array.map((service, index) => (
            <Bigger>
              <div
                key={index}
                className="rounded-lg group shadow-md h-[280px] relative h-ful duration-300 overflow-hidden"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute group-hover:brightness-50 group-hover:scale-105 duration-500 top-0 left-0 w-full h-full object-cover"
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
                  <div className="leading-4 text-sm h-0 overflow-hidden group-hover:h-12 group-hover:pb-2 duration-500 ease-out opacity-0 group-hover:opacity-100">
                    {service.description}
                  </div>
                  <Link
                    href={service.url}
                    className="bg-primary hover:bg-primary/80 duration-300 text-xs px-3 leading-6 w-fit rounded-[30px] uppercase"
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
  );
}

export default Services;
