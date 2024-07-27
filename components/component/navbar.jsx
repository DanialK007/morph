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
      className={`pt-3 pb-2 border-b border-primary-foreground/40 text-primary-foreground px-5 lg:px-20 fixed z-10 flex justify-between top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-primary-foreground text-secondary font-semibold' : 'bg-transparent'}`}
    >
      <NavbarContent className="flex gap-4 pe-5">
        <NavbarItem>
          <Link color="foreground" className="lg:hidden hover:text-primary font-semibol" href="#">
            <img alt="" src="logo.png" className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${isScrolled ?  "invert" : "invert-0"}`}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hidden lg:block hover:text-primary font-semibol" href="#">
            <FaTwitter className="text-xl"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hidden lg:block hover:text-primary font-semibol" href="#">
            <FaFacebook className="text-xl"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hidden lg:block hover:text-primary font-semibol" href="#">
            <FaInstagram className="text-xl"/>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            <img alt="" src="logo.png" className={`h-14 w-16 pt-2 object-cover rounded-lg duration-300 ${isScrolled ?  "invert" : "invert-0"}`}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            Resourse
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-primary font-semibol" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Link color="foreground" className="bg-primary text-primary-foreground px-3 py-[8px] rounded-md text-xs font-semibold uppercase" href="#">
            Let's talk
          </Link>
        </NavbarItem>
        <button className="lg:hidden p-2 bg-primary rounded-lg">
            <FaBars className="text-primary-foreground text-lg"/>
        </button>
      </NavbarContent>
    </Navbar>
  );
}
