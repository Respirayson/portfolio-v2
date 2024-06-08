"use client";

import Link from "next/link";
import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";
import Script from "next/script";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div>
        <div className="sm:flex hidden gap-12 text-md text-zinc-400">
          <FloatingNav navItems={navItems} />
        </div>
        <nav
          id="mobile-navbar"
          className="flex justify-between items-center py-4 pb-4 px-8 w-full fixed left-0 transition-colors ease-in duration-700"
        >
          <div className="sm:hidden flex flex-row items-center gap-[1ch]">
            <a
              className="flex flex-row gap-2 relative text-neutral-50 justify-center items-center"
              href="#hero"
            >
              <img
                src="/rayson.jpg"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-bold">Rayson</span>
            </a>
          </div>
          <div
            className="cursor-pointer sm:hidden text-md text-white"
            onClick={toggleMenu}
          >
            Menu
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-black-100 text-white py-4 px-8"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <img
                    src="/rayson.jpg"
                    alt="logo"
                    className="h-8 w-8 rounded-full"
                  />{" "}
                  <p
                    className="cursor-pointer text-md text-white"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center text-center font-medium items-center gap-4 "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                          handleClick={toggleMenu}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Script id="nav-scroll">
        {`
        document.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
              document.getElementById("mobile-navbar")?.classList.add("bg-black-100");
          } else {
              document.getElementById("mobile-navbar")?.classList.remove("bg-black-100");
          }
        });
      `}
      </Script>
    </>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({
  title,
  href,
  handleClick,
}: {
  title: string;
  href: string;
  handleClick: () => void;
}) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white"
    >
      <Link onClick={handleClick} href={href}>
        {title}
      </Link>
    </motion.div>
  );
};
