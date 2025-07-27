import React from "react";
import { Link } from "react-router-dom";
import posterImg from "../assets/posterimg.jpg";
import { apiConfig } from "../api/tmdbApi";
import { Button, OutlineButton } from "./Button";
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react";

const MovieCard = ({ item, category }) => {
  const bg = apiConfig.originalImage(item.poster_path);

  const BgImage = {
    backgroundImage: `url(${bg}`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };
  return (
    <Link className="group" to={`/${category}/${item.id}`}>
      <div
        className="relative flex items-center justify-center h-72 w-44 rounded-3xl"
        style={BgImage}
      >
        <div className="absolute hidden w-full h-full bg-black/60 group-hover:block"></div>
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className="z-50 hidden py-3 bg-red-600 rounded-full shadow-sm px-7 shadow-red-500 group-hover:block"
        >
          <FaPlay className="text-[10px]" />
        </motion.div>
      </div>
      <p className="pt-2 font-semibold group-hover:text-red-600">
        {item.title?.length > 20
          ? item.title?.slice(0, 20) + "..."
          : item.title}
      </p>
    </Link>
  );
};

export default MovieCard;
