import React, { useContext, useState } from "react";
import fetchFromApi from "../api/fetchFromApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Context } from "../context/context";
import posterImg from "../assets/posterimg.jpg";

import "swiper/css";
import MovieCard from "./MovieCard";

const MovieGrid = ({ category, type }) => {
  const [items, setItems] = useState([3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3]);
  const { shuffle } = useContext(Context);

  useEffect(() => {
    fetchFromApi(`${category}/${type}`).then((data) => {
      shuffle(data.results);
      console.log(data.results);
      setItems(data.results);
    });
  }, []);
  const BgImage = {
    backgroundImage: `url(${posterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="flex justify-center px-5 sm:px-20">
      {/* <div className="flex flex-wrap"> */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, i) => (
          <MovieCard item={item} key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
