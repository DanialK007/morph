"use client"
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaBars, FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

export default function MyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <Navbar 
      className={`pt-3 pb-2 border-b border-primary-foreground/40 px-5 lg:px-20 fixed z-50 flex justify-between top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-primary-foreground font-semibold' : 'bg-transparent'}`}
    >
      <NavbarContent className="flex gap-4">
        <NavbarItem>
          <Link className="lg:hidden hover:text-primary font-semibol" href="#">
            <img alt="" src="logo.png" className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${isScrolled ?  "invert" : "invert-0"}`}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`hidden lg:block outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="#">
            <FaTwitter className="text-xl"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`hidden lg:block outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="#">
            <FaFacebook className="text-xl"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`hidden lg:block outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="#">
            <FaInstagram className="text-xl"/>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8 lg:pe-3" justify="center">
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="#">
            <img alt="" src="logo.png" className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${isScrolled ?  "invert" : "invert-0"}`}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/blog">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`outline-none hover:text-primary font-semibol ${isScrolled ? 'text-secondary' : 'text-primary-foreground'}`} href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Link className="bg-primary px-3 py-[8px] rounded-md text-xs font-semibold uppercase text-primary-foreground" href="#">
            Let's talk
          </Link>
        </NavbarItem>
        <button className="lg:hidden p-2 bg-primary rounded-lg">
            <FaBars className="text-lg"/>
        </button>
      </NavbarContent>
    </Navbar>
  );
}
