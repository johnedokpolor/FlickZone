import React, { useContext, useState } from "react";
import fetchFromApi from "../api/fetchFromApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Context } from "../context/context";
import posterImg from "../assets/posterimg.jpg";

import "swiper/css";
import MovieCard from "./MovieCard";

const MovieList = ({ category, type }) => {
  const [items, setItems] = useState([3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3]);
  const { shuffle } = useContext(Context);

  useEffect(() => {
    fetchFromApi(`/${category}/${type}`).then((data) => {
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
    <div>
      <Swiper
        className="flex gap-3 overflow-auto"
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 7,
          },
        }}
      >
        {items.map((item, i) => (
          // <SwiperSlide>
          <MovieCard item={item} category={category} />
          // </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
