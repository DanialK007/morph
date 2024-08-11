"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  FaBars,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

export default function MyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar
        className={`pt-3 pb-2 border-b border-primary-foreground/40 lg:px-20 fixed z-50 flex justify-between top-0 left-0 w-full transition-all duration-300 ${
          isScrolled ? "bg-primary-foreground font-semibold" : "bg-transparent"
        }`}
      >
        <NavbarContent className="flex gap-4">
          <NavbarItem>
            <Link className="lg:hidden hover:text-primary font-semibol" href="#">
              <img
                alt=""
                src="https://i.imgur.com/crtpq5D.png"
                className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${
                  isScrolled ? "invert" : "invert-0"
                }`}
              />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`hidden lg:block outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="#"
            >
              <FaTwitter className="text-xl" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`hidden lg:block outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="#"
            >
              <FaFacebook className="text-xl" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`hidden lg:block outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="#"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-8 lg:pe-3" justify="center">
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/about"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="#"
            >
              <img
                alt=""
                src='https://i.imgur.com/crtpq5D.png'
                className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${
                  isScrolled ? "invert" : "invert-0"
                }`}
              />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/blog"
            >
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`outline-none hover:text-primary font-semibol ${
                isScrolled ? "text-secondary" : "text-primary-foreground"
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem>
            <Link
              className="bg-primary hover:bg-secondary duration-300 px-3 py-[8px] rounded-md text-xs font-semibold uppercase text-primary-foreground"
              href="#"
            >
              Let's talk
            </Link>
          </NavbarItem>
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 bg-primary text-primary-foreground rounded-lg z-[999]"
          >
            <FaBars className="text-lg" />
          </button>
        </NavbarContent>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-primary text-primary-foreground flex flex-col justify-center items-center z-[998] gap-8 text-lg font-semibold duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <img
              alt=""
              src="https://i.imgur.com/crtpq5D.png"
              className={`size-32 pt-2 object-cover rounded-lg duration-300`}
            />
          </div>
          <div>
            <Link href="/" className="text-primary-foreground">
              Home
            </Link>
          </div>
          <div>
            <Link href="/about" className="text-primary-foreground">
              About
            </Link>
          </div>
          <div>
            <Link href="/services" className="text-primary-foreground">
              Services
            </Link>
          </div>
          <div>
            <Link href="/portfolio" className="text-primary-foreground">
              Portfolio
            </Link>
          </div>
          <div>
            <Link href="/blog" className="text-primary-foreground">
              Blogs
            </Link>
          </div>
          <div>
            <Link href="/contact" className="text-primary-foreground">
              Contact
            </Link>
          </div>
        </div>
      </Navbar>
      <div className="fixed bottom-10 right-10 size-14 rounded-[80px] flex items-center justify-center text-2xl bg-primary text-primary-foreground z-[99]">
        <FaFacebookMessenger />
      </div>
    </>
  );
}
