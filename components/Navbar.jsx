import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);
  const [linkColor, setlinkColor] = useState("#1f2937");

  // For Mobile nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Change Nav color
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const { SystemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  //Next Theme or dark mood setup========
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? SystemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <IoSunnyOutline
          className="w-6 h-6 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IoMoonOutline
          className="w-6 h-6 text-gray-400"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const email = "mushfiq.kdu@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-black/50"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
        {/* Left Side - Logo */}
        <Link href="/">
          <div className="text-3xl font-serif dark:text-green-500">
            <h2>MUSHFIQ</h2>
          </div>
        </Link>

        {/* Center - Menu */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex flex-1 justify-center"
        >
          <ul
            style={{ color: `${linkColor}` }}
            className="flex space-x-10"
            role="menu"
            aria-label="Main Navigation"
          >
            <li
              className="font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/" aria-label="Home page" role="menuitem">
                Home
              </Link>
            </li>
            <li
              className="font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/services" aria-label="services" role="menuitem">
                Services
              </Link>
            </li>
            <li
              className="font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/blog" aria-label="blog" role="menuitem">
                Blog
              </Link>
            </li>

            <li
              className="font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/contact" aria-label="contact" role="menuitem">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="p-2">{mounted && renderThemeChanger()}</div>

          <div onClick={handleNav} className="md:hidden dark:text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white dark:bg-black/50"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between cursor-pointer">
              <Link href="/">
                <div className="text-3xl font-serif dark:text-green-500">
                  <h2>Mushfiq</h2>
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-black/30 text-white"
              >
                <AiOutlineClose />
              </div>
            </div>
            <nav
              className="py-4 flex flex-col cursor-pointer"
              aria-label="Mobile Navigation"
            >
              <ul
                className="uppercase"
                style={{ color: `${linkColor}` }}
                role="menu"
                aria-label="My Account"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/" role="menuitem">
                    Home
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/#Services" aria-label="Services" role="menuitem">
                    Services
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/blog" aria-label="blog" role="menuitem">
                    blog
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/contact" role="menuitem">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="pt-20">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:bg-indigo-500 hover:text-white ease-in duration-300">
                    <Link
                      href="https://www.linkedin.com/in/mushfiq1/"
                      rel="noreferrer"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="text-blue-500 hover:text-white" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:bg-indigo-500 hover:text-white ease-in duration-300">
                    <Link
                      href="https://github.com/mushfiqur-rahman/"
                      rel="noreferrer"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-blue-500 hover:text-white" />
                    </Link>
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:bg-indigo-500 hover:text-white ease-in duration-300"
                    onClick={handleClick}
                  >
                    <Link
                      href={`mailto:${email}`}
                      rel="noreferrer"
                      target="_blank"
                      aria-label="email"
                    >
                      <MdEmail className="text-blue-500 hover:text-white" />
                    </Link>
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:bg-red-500 hover:text-white ease-in duration-300">
                    <Link
                      href="https://www.youtube.com/@itmushfiq"
                      rel="noreferrer"
                      target="_blank"
                      aria-label="YouTube"
                    >
                      <BsYoutube className="text-blue-500 hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
