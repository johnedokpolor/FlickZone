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
        className="md:w-42 relative flex h-72 w-40 items-center justify-center rounded-3xl"
        style={BgImage}
      >
        <div className="absolute hidden h-full w-full bg-black/60 group-hover:block"></div>
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
          className="z-50 hidden rounded-full bg-red-600 px-7 py-3 shadow-sm shadow-red-500 group-hover:block"
        >
          <FaPlay className="text-[10px]" />
        </motion.div>
      </div>
      <p className="pt-2 font-semibold group-hover:text-red-600">
        {(item.title?.length > 20
          ? item.title?.slice(0, 20) + "..."
          : item.title) ||
          (item.name?.length > 20
            ? item.name?.slice(0, 20) + "..."
            : item.name)}
      </p>
    </Link>
  );
};

export default MovieCard;
