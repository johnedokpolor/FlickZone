import React from "react";
import HeroSlide from "../components/HeroSlide";
import { OutlineButton } from "../components/Button";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <HeroSlide />

      <div className="px-5 sm:px-20">
        <div className="mb-4 mt-5 flex items-center justify-between">
          <h1 className="text-lg font-bold">Trending Movies</h1>

          <OutlineButton content="View more" path="/movie" />
        </div>
        <MovieList category="movie" type="popular" />
        <div className="mb-4 mt-5 flex items-center justify-between">
          <h1 className="text-lg font-bold">Top Rated Movies</h1>

          <OutlineButton content="View more" path="/movie" />
        </div>
        <MovieList category="movie" type="top_rated" />
        <div className="mb-4 mt-5 flex items-center justify-between">
          <h1 className="text-lg font-bold">Trending TV</h1>

          <OutlineButton content="View more" path="/tv" />
        </div>
        <MovieList category="tv" type="popular" />
        <div className="mb-4 mt-5 flex items-center justify-between">
          <h1 className="text-lg font-bold">Top Rated TV</h1>

          <OutlineButton content="View more" path="/tv" />
        </div>
        <MovieList category="tv" type="top_rated" />
      </div>
    </div>
  );
};

export default Home;
