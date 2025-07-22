import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer-bg.png";

const Footer = () => {
  const BgStyle = {
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };
  return (
    <div
      style={BgStyle}
      className="relative mb-10 mt-5 flex justify-center p-5 sm:mb-0"
    >
      <div className="absolute top-0 h-full w-full bg-black/50" />
      <div className="z-10">
        <h1 className="mb-3 text-center text-2xl">FlickZone</h1>
        <div className="flex w-[90vw] justify-between md:w-[60vw]">
          <div className="flex flex-col gap-2">
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              <Link to="/">Home</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              {" "}
              <Link to="/">Contact Us</Link>
            </p>

            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              {" "}
              <Link to="/">About Us</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              {" "}
              <Link to="/">Live</Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              <Link to="/">FAQ</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              {" "}
              <Link to="/">Premium</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              <Link to="/">Top IMDB</Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              {" "}
              <Link to="/">You Must Watch</Link>
            </p>
            <p className="duration-500 hover:-translate-y-2 hover:text-red-400">
              <Link to="/">Recent Release</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
