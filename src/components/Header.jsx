import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/context";
import { FaMoon, FaSun, FaSearch, FaHome } from "react-icons/fa";
import { motion } from "motion/react";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV series",
    path: "/tv",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = headerNav.find((i) => i.path === pathname);
  console.log(active);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const { dark, setDark } = useContext(Context);
  return (
    <nav
      className={`fixed z-50 w-screen px-10 py-3 text-white sm:fixed sm:top-0 sm:flex sm:justify-between sm:py-4 ${scrolled ? "bg-black" : ""}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <h1 className="text-center text-2xl">FlickZone </h1>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className="z-50 hidden w-full px-5 sm:flex sm:justify-end sm:gap-6"
      >
        {headerNav.map((item, i) => {
          return (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
              }}
            >
              <Link
                className={`text-lg hover:text-red-600 ${item === active && "border-b-2 border-red-600 pb-1"}`}
                to={item.path}
              >
                {item.display}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className="fixed bottom-0 left-0 z-50 flex w-full justify-between bg-black px-5 py-3 sm:hidden sm:gap-6"
      >
        {headerNav.map((item, i) => {
          return (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
              }}
            >
              <Link
                className={`text-lg hover:text-red-600 ${item === active && "border-b-2 border-red-600 pb-1"}`}
                to={item.path}
              >
                {item.display}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default Header;
