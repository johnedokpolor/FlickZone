import React, { useContext, useState } from "react";
import fetchFromApi from "../api/fetchFromApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Context } from "../context/context";

import "swiper/css";
import MovieCard from "./MovieCard";

const MovieList = ({ category, type }) => {
  const [items, setItems] = useState([]);
  const { shuffle } = useContext(Context);

  useEffect(() => {
    fetchFromApi(`${category}/${type}`).then((data) => {
      shuffle(data.results);
      console.log(data.results);
      setItems(data.results);
    });
  }, []);

  return (
    <div>
      <div className="flex gap-3 overflow-auto">
        {items.map((item, i) => (
          <MovieCard item={item} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
