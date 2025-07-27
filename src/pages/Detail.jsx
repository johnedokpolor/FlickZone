import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFromApi from "../api/fetchFromApi";
import { apiConfig } from "../api/tmdbApi";
import ReactPlayer from "react-player";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";
import { motion } from "motion/react";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [casts, setCasts] = useState(null);
  const [trailers, setTrailers] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const videos = await fetchFromApi(`/movie/${id}/videos`);
      console.log(videos.results);
      if (videos.results.length > 0) {
        setTrailers(videos.results);
      }
      fetchFromApi(`${category}/${id}`).then((data) => {
        setItem(data);
        console.log(data);
      });
    };
    const getCasts = async () => {
      fetchFromApi(`${category}/${id}/credits`).then((data) => {
        setCasts(data.cast);
      });
    };
    getDetails();
    getCasts();
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <div
            style={{
              backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path)})`,
              backgroundRepeat: "no-repeat",
              backgroundPostion: "center",
              backgroundSize: "cover",
            }}
            className="h-[450px] w-screen"
          >
            <div className="absolute top-0 h-[450px] w-screen bg-black/60"></div>
          </div>
          <div className="relative flex gap-10 px-5 -top-40 sm:-top-32 sm:px-40">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative hidden w-[300px] rounded-xl lg:block"
              src={apiConfig.originalImage(item.poster_path)}
              alt="poster-image"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold">{item.title || item.name}</h1>
              <div className="flex gap-2 mt-5">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 text-sm text-white border-2 border-white rounded-full"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="mt-3 text-white">{item.overview}</p>
              <p className="mt-3 text-white">
                Release Date:{" "}
                <span>
                  {item.first_air_date?.slice(0, 4) ||
                    item.release_date?.slice(0, 4)}
                </span>
              </p>
              <h1 className="mt-5 text-2xl font-bold">Casts</h1>
              {casts && (
                <div className="grid grid-cols-3 gap-5 mt-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {casts.slice(0, 6).map((cast) => (
                    <div key={cast.id} className="text-center">
                      <img
                        className="h-[150px] w-[100px] rounded-lg"
                        src={apiConfig.originalImage(cast.profile_path)}
                        alt={cast.name}
                      />
                      <p className="mt-2 text-sm text-start">{cast.name}</p>
                      <p className="text-xs text-gray-400 text-start">
                        {cast.character}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
          {trailers && (
            <div className="relative -top-40 sm:-top-10">
              {trailers.slice(0, 5).map((trailer, index) => {
                const videoSrc = `https://www.youtube.com/watch?v=${trailer.key}`;
                return (
                  <div key={index} className="px-5 my-10 sm:px-20">
                    <h1>{trailer.name}</h1>
                    <ReactPlayer
                      url={videoSrc}
                      width="100%"
                      height="500px"
                      controls
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div
            className="px-5 -top-40 sm:-top-10 sm:px-20"
            onClick={() => setItem(null)}
          >
            <h1 className="relative mb-5 text-xl font-bold">More Like This</h1>
            <MovieList category={category} type="popular" />
          </div>
        </>
      ) : (
        <div className="h-screen">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Detail;
