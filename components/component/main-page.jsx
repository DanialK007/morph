import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BsFacebook, BsGlobe } from "react-icons/bs";
import { FaCircleInfo, FaRegCreditCard } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FAQ } from "./faq";
import Portfolio from "./porfolio";
import { portfolio, services } from "@/public/data";
import { Features } from "./features";
import Services from "./services";
import Bigger from "./Bigger";
import Blogs from "./blogs";
import Lefter from "./Lefter";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-primary-foreground">
      <section className="w-full h-screen flex items-center justify-center relative pt-20">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover lighter bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4 heroUp">
              <img
                alt=""
                src="logo.png"
                className="size-20 scale-150 mb-4 p-1 object-[50%] rounded-[5px] bg-primary"
              />
              <h1 className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                Your Imigination, Our Creation
              </h1>
              <p className="max-w-[600px] opacity-80 md:text-xl">
                Our digital marketing agency specializes in crafting tailored
                strategies to help your business thrive in the digital
                landscape.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center justify-center bg-primary text-primary-foreground px-5 shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center text-secondary justify-center border border-input bg-background px-5 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services array={services} />
      <Features />
      <Portfolio array={portfolio} number={8} />
      <section
        id="about"
        className="relative mb-14 lg:mb-24 py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute top-0 left-0 -z-10 blur-sm scale-105 w-full h-full bg-[url(https://aofund.org/app/uploads/2021/01/people-coffee-tea-meeting-1024x576.jpg)] bg-cover brightness-50"></div>
        <div className="container max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:gap-16">
          <div className="flex-1">
            <Lefter>
              <h2 className="text-3xl lg:text-5xl font-bold font-montserrat">
                About Us
              </h2>
              <p className="mt-4 text-base font-roboto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aliquam consectetur, ratione sint aliquid aut a
                corporis officia magnam molestias labore veritatis id voluptas
                vero nemo voluptates doloribus tempora distinctio? ratione sint
                aliquid aut a corporis officia magnam molestias labore veritatis
                id voluptas vero nemo voluptates doloribus tempora distinctio?
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="#"
                  className="rounded-lg text-primary-foreground bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </Lefter>
          </div>
          <div className="flex-1">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="About Me"
                className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#28293D] to-transparent" /> */}
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="pb-12 md:pb-24">
        <div className="px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2 text-secondary">
              Our Gallery
            </h2>
            <p className="text-secondary/60 text-lg">
              Our digital marketing services are designed to help your business
              thrive in the digital age.
            </p>
          </div>
          <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 1
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 2
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 3
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 1
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 2
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden rounded-lg bg-secondary shadow-lg transition-all h-[300px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 3
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Bigger>
          </div>
        </div>
      </section>
      <Blogs array={portfolio} number={3}/>
      <FAQ />
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 blur-sm scale-105 w-full h-full bg-[url(https://aofund.org/app/uploads/2021/01/people-coffee-tea-meeting-1024x576.jpg)] bg-cover brightness-50"></div>
        <div className="container max-w-7xl mx-auto flex flex-col gap-4 lg:gap-6 items-center text-center justify-center px-4">
          <div className="text-2xl lg:text-4xl font-semibold uppercase">
            Ready to build your Imiginations?
          </div>
          <a
            href="#"
            className="text-lg uppercase lg:text-xl py-3 px-4 font-semibold bg-primary rounded-lg hover:bg-secondary"
          >
            Let's talk
          </a>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 bg-primary-foreground text-secondary">
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p
              className="mx-auto max-w-[700px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied clients and learn how we've helped them achieve their digital marketing goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md py-8">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-[50px]" />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="opacity-60 text-sm">CEO, Acme Inc.</p>
                  </div>
                </div>
                <p className="opacity-60">
                  "The team at this digital marketing agency has been instrumental in helping us grow our online
                  presence. Their expertise and strategic approach have been invaluable."
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md py-8">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-[50px]" />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="opacity-60 text-sm">Marketing Manager, XYZ Corp.</p>
                  </div>
                </div>
                <p className="opacity-60">
                  "I'm incredibly impressed with the results we've seen since working with this digital marketing
                  agency. They've truly exceeded our expectations."
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md py-8">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-[50px]" />
                  <div>
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <p className="opacity-60 text-sm">Founder, Startup Co.</p>
                  </div>
                </div>
                <p className="opacity-60">
                  "This digital marketing agency has been a game-changer for our business. Their innovative strategies
                  and attention to detail have helped us reach new heights."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
