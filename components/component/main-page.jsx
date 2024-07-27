import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { BsFacebook, BsGlobe } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { HiBuildingStorefront } from "react-icons/hi2";

export function MainPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh] text-primary-foreground">
      <section className="w-full h-screen flex items-center justify-center relative pt-20">
        <div className="absolute bg-[url(/marketing.webp)] top-0 left-0 w-full h-full -z-10 bg-cover brightness-50 bg-fixed"></div>
        <div className="container max-w-7xl mx-auto text-center p-4">
          <div
            className="">
            <div className="flex flex-col items-center justify-center space-y-4">
                <img alt="" src="logo.png" className="size-20 scale-150 mb-4 p-1 object-[50%] rounded-[5px] bg-primary"/>
                <h1
                  className="text-3xl py-2 font-semibold sm:text-5xl xl:text-7xl/none">
                  Your Imigination, Our Creation
                </h1>
                <p className="max-w-[600px] opacity-80 md:text-xl">
                  Our digital marketing agency specializes in crafting tailored strategies to help your business thrive
                  in the digital landscape.
                </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center justify-center bg-primary text-primary-foreground px-5 shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex uppercase text-[0.75rem] font-semibold h-9 rounded-md items-center text-secondary justify-center border border-input bg-background px-5 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-primary-foreground text-secondary">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">Our Services</h2>
              <p
                className="max-w-[900px] text-secondary/60 text-lg">
                Our digital marketing services are designed to help your business thrive in the digital age.
              </p>
            </div>
          </div>
          <div
            className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <BsGlobe className="h-8 w-8 text-primary" />   
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Web Development Services</h3>
                <p className="opacity-60 pt-2">
                  Optimize your website to rank higher in search engine results and drive more organic traffic.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <BsFacebook className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Digital Marketing Services</h3>
                <p className="opacity-60 pt-2">
                  Leverage the power of social media to engage with your audience and build brand awareness.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <BsBuildingFillCheck className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Business Registration Services</h3>
                <p className="opacity-60 pt-2">
                  Optimize your website to rank higher in search engine results and drive more organic traffic.
                </p>
              </CardContent>
            </Card>
            {/* <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <MdLibraryBooks className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Content Writing</h3>
                <p className="opacity-60 pt-2">
                  Optimize your website to rank higher in search engine results and drive more organic traffic.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <FaRegCreditCard className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Boosting Service</h3>
                <p className="opacity-60 pt-2">
                  Implement targeted ad campaigns to drive qualified leads and increase conversions.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <IoQrCodeOutline className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Passport QR Service</h3>
                <p className="opacity-60 pt-2">
                  Leverage the power of social media to engage with your audience and build brand awareness.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <BsBuildingFillCheck className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Company Registration</h3>
                <p className="opacity-60 pt-2">
                  Implement targeted ad campaigns to drive qualified leads and increase conversions.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
              <CardHeader>
                <HiBuildingStorefront className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">SME Member Card Registration</h3>
                <p className="opacity-60 pt-2">
                  Implement targeted ad campaigns to drive qualified leads and increase conversions.
                </p>
              </CardContent>
            </Card> */}
          </div>
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
                    src="/placeholder.svg"
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
    </div>)
  );
}

function ActivityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>)
  );
}


function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
