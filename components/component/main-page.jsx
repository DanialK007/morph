import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { BsFacebook, BsGlobe } from "react-icons/bs";
import { FaCircleInfo, FaRegCreditCard } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { HiBuildingStorefront } from "react-icons/hi2";

const services = [
  {
    icon: <BsFacebook size={32} />,
    image: "https://internetdevels.com/sites/default/files/public/blog_preview/why_does_a_software_company_need_a_professional_services_team_0.jpg",
    title: "Web development",
    description: "Develop high-quality websites and responsive applications."
  },
  {
    icon: <BsGlobe size={32} />,
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2024/02/image1-6.png",
    title: "Digital Marketing",
    description: "Reach your target audience across multiple countries and languages."
  },
  {
    icon: <FaRegCreditCard size={32} />,
    image: "https://online.york.ac.uk/wp-content/uploads/2022/07/Group-of-people-around-a-low-table-with-business-documents-laid-out-1030x579.jpg",
    title: "Business Registration",
    description: "Establish your business and secure a strong reputation."
  }
]

const portfolio = [
  {
    image: "",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus in consectetur luctus, justo ex condimentum felis, vitae vestibulum nisi est sed eros. Donec congue justo sed risus fermentum, sed ullamcorper velit finibus.",
    category: "",
    link: "#"
  },
  {
    image: "",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus in consectetur luctus, justo ex condimentum felis, vitae vestibulum nisi est sed eros. Donec congue justo sed risus fermentum, sed ullamcorper velit finibus.",
    category: "",
    link: "#"
  },
  {
    image: "",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus in consectetur luctus, justo ex condimentum felis, vitae vestibulum nisi est sed eros. Donec congue justo sed risus fermentum, sed ullamcorper velit finibus.",
    category: "",
    link: "#"
  },
  {
    image: "",
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus in consectetur luctus, justo ex condimentum felis, vitae vestibulum nisi est sed eros. Donec congue justo sed risus fermentum, sed ullamcorper velit finibus.",
    category: "",
    link: "#"
  }
]

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
            className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {
                services.map((service, index) => (
                  <div key={index} className="rounded-lg group shadow-md h-[280px] relative h-ful duration-300 overflow-hidden">
                    <img src={service.image} alt="" className="absolute group-hover:brightness-50 group-hover:scale-105 duration-500 top-0 left-0 w-full h-full object-cover"/>
                    <button title="more info" className="absolute top-3 right-3 text-secondary/40 text-2xl z-20 group-hover:text-primary-foreground duration-500">
                      <FaCircleInfo />
                    </button>
                    <div className="absolute p-5 top-0 left-0 w-full z-10 bg-gradient-to-t from-secondary/90 to-secondary/0 from-[10%] to-[50%] h-full flex flex-col justify-end text-primary-foreground">
                      <h3 className="text-2xl font-semibold pb-1">{service.title}</h3>
                      <div className="leading-4 text-sm h-0 overflow-hidden group-hover:h-12 group-hover:pb-2 duration-500 ease-out opacity-0 group-hover:opacity-100">{service.description}</div>
                      <a href="#" className="bg-primary hover:bg-primary/80 duration-300 text-xs px-3 leading-6 w-fit rounded-[30px] uppercase">View services</a>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </section>
      <section className="w-full pb-12 md:pb-24 bg-primary-foreground text-secondary">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">Our Portfolio</h2>
              <p
                className="max-w-[900px] text-secondary/60 text-lg">
                Our digital marketing services are designed to help your business thrive in the digital age.
              </p>
            </div>
          </div>
          <div
            className="mx-auto grid max-w-8xl lg:px-10 items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
            {
              portfolio.map((item, index) => (
                <div className="shadow-md rounded-lg border border-primary/10 overflow-hidden h-full hover:scale-105 duration-300 cursor-pointer hover:shadow-xl">
                  <div className="relative">
                    {/* <BsGlobe className="h-8 w-8 text-primary" />   */}
                    <img
                      className="w-full aspect-[4/3] object-cover bg-primary/20"
                      src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2024/02/image1-6.png"
                      alt="Image 1"
                    /> 
                    <div className="absolute top-2 right-2 bg-primary px-1 text-xs leading-6 text-primary-foreground rounded-md">Digital Marketing</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Marketing Power</h3>
                    <p className="opacity-60 pt-2">
                      Optimize your website to rank higher in search engine results and drive more organic traffic.
                    </p>
                    <a href="#" className="pt-2 text-sm block w-fit ms-auto font-semibold">Read More</a>
                  </div>
                </div>
              ))
            }
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
