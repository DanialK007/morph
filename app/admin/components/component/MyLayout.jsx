"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import axios from "axios";

export function MyLayout() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full flex-1",
        "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 fixed left-0 top-0 z-50 bg-primary text-primary-foreground">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Lin Thandar Phyo",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 bg-primary-foreground w-7 flex-shrink-0 rounded-[50px]"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-primary-foreground dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Morph - Admin Panel
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-primary-foreground dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
// Dummy dashboard component with content
const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://morph-api-server.vercel.app/api/blogs"
        );
        setBlogs(res.data);
      } catch (err) {
        setError("Connection Time out. Please try again later.");
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <div className="flex flex-1 md:ps-16">
      <div className="p-2 md:p-10 rounded-tl-2xl flex flex-col gap-2 flex-1 w-full">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg bg-muted"></div>
          <div className="h-20 w-full rounded-lg bg-muted"></div>
          <div className="h-20 w-full rounded-lg bg-muted"></div>
          <div className="h-20 w-full rounded-lg bg-muted"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="w-full rounded-lg bg-muted border p-8 h-fit">
            <BlogForm addBlog={addBlog} />
          </div>
          <div className="h-full w-full rounded-lg bg-muted border p-8  ">
            <BlogList
              blogs={blogs}
              setBlogs={setBlogs}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
