"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)
  }, [])
  return (
    (<div
      className={`flex flex-col min-h-screen bg-[#1E1E2E] text-white transition-colors ${isDarkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-10 w-full bg-[#28293D] py-4 shadow-lg">
        <div
          className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6 text-[#6C63FF]" />
            <h1 className="text-2xl font-bold font-montserrat">John Doe's Portfolio</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#6C63FF]"
              prefetch={false}>
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#6C63FF]"
              prefetch={false}>
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#6C63FF]"
              prefetch={false}>
              Skills
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#6C63FF]"
              prefetch={false}>
              Contact
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-[#6C63FF]/20"
              onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="flex flex-col items-center justify-center gap-6 py-24 md:py-32">
          <div className="max-w-xl text-center">
            <h2 className="text-4xl font-bold font-montserrat">Welcome to My Portfolio</h2>
            <p className="mt-4 text-lg font-roboto text-[#B0B0B0]">Explore my work and get to know me better.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-lg bg-[#6C63FF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5a54e6]"
              prefetch={false}>
              View Projects
            </Link>
            <Link
              href="#"
              className="rounded-lg border border-[#6C63FF] px-6 py-3 font-medium text-[#6C63FF] transition-colors hover:bg-[#6C63FF]/20"
              prefetch={false}>
              Contact Me
            </Link>
          </div>
        </section>

        
        <section id="skills" className="bg-[#28293D] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-montserrat">My Skills</h2>
            <p className="mt-4 text-base font-roboto text-[#B0B0B0]">
              Here are some of the technologies I'm proficient in.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1E1E2E] p-4 shadow-lg">
                <CodepenIcon className="h-12 w-12 text-[#6C63FF]" />
                <h3 className="text-lg font-bold font-montserrat">React</h3>
                <p className="text-base font-roboto text-[#B0B0B0]">
                  A JavaScript library for building user interfaces.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1E1E2E] p-4 shadow-lg">
                <CodepenIcon className="h-12 w-12 text-[#6C63FF]" />
                <h3 className="text-lg font-bold font-montserrat">Next.js</h3>
                <p className="text-base font-roboto text-[#B0B0B0]">
                  A React framework for building server-rendered applications.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1E1E2E] p-4 shadow-lg">
                <WindIcon className="h-12 w-12 text-[#6C63FF]" />
                <h3 className="text-lg font-bold font-montserrat">Tailwind CSS</h3>
                <p className="text-base font-roboto text-[#B0B0B0]">
                  A utility-first CSS framework for rapidly building custom designs.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1E1E2E] p-4 shadow-lg">
                <CodepenIcon className="h-12 w-12 text-[#6C63FF]" />
                <h3 className="text-lg font-bold font-montserrat">Node.js</h3>
                <p className="text-base font-roboto text-[#B0B0B0]">
                  A JavaScript runtime built on Chrome's V8 JavaScript engine.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-montserrat">Get in Touch</h2>
            <p className="mt-4 text-base font-roboto text-[#B0B0B0]">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>
            <form className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium font-montserrat text-white">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg bg-[#1E1E2E] px-4 py-3 text-white placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-montserrat text-white">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-lg bg-[#1E1E2E] px-4 py-3 text-white placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium font-montserrat text-" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>)
  );
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>)
  );
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>)
  );
}


function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
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
