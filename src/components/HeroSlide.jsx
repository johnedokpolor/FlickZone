import React, { useContext, useEffect, useState } from "react";
import fetchFromApi from "../api/fetchFromApi";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "./Spinner";
import "swiper/css";
import { MovieData } from "../assets/assets";
import HeroSlideItem from "./HeroSlideItem";
import { Context } from "../context/context";

const HeroSlide = () => {
  // SwiperCore.use([Autoplay])
  const [movieItems, setMovieItems] = useState(MovieData);
  const [loading, setLoading] = useState(true);
  const [trailer, settrailer] = useState(false);

  const { shuffle } = useContext(Context);

  useEffect(() => {
    console.log("Getting Movies...");
    fetchFromApi("/movie/popular").then((data) => {
      shuffle(data.results);
      setMovieItems(data.results);
      setLoading(false);
    });
  }, []);
  console.log(movieItems);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === movieItems.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  const dotsIndicator = movieItems.length;

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!trailer) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  // Function to detect screen size
  let screenSize = `translateX(-${(activeSlide * 100) / 1}%)`;

  return (
    <div className="flex h-[450px] justify-center sm:h-screen">
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-[450px] overflow-hidden sm:h-screen">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: screenSize,
            }}
          >
            <div className="flex">
              {movieItems.map((movie, i) => {
                return (
                  <div className="w-screen" key={i}>
                    <HeroSlideItem movie={movie} setTrailer={settrailer} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
