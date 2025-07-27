import { useState } from "react";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "motion/react";
import { Button, OutlineButton } from "./Button";
import { apiConfig } from "../api/tmdbApi";
import fetchFromApi from "../api/fetchFromApi";

const Modal = ({ src }) => {
  return <ReactPlayer className="w-full m-5" url={src} controls />;
};

const HeroSlideItem = ({ movie, setTrailer }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  async function setModal() {
    if (videoSrc) {
      setVideoSrc(null);
      setTrailer(false);
    } else {
      const videos = await fetchFromApi(`/movie/${movie.id}/videos`);
      if (videos.results.length > 0) {
        setVideoSrc(`https://www.youtube.com/watch?v=${videos.results[0].key}`);
        setTrailer(true);
      } else {
        console.log("No Trailer");
      }
    }
  }
  const BgStyle = {
    backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
    // backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="h-[450px] w-screen sm:h-screen">
      <div style={BgStyle} className="hero h-[450px] w-full sm:h-screen">
        <div className="absolute top-0 h-[450px] w-screen bg-black/50 sm:h-screen"></div>
        <div className="relative flex items-center justify-center gap-10 px-5 top-20 sm:px-32">
          <AnimatePresence>
            {videoSrc && (
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 1 },
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  transition: { duration: 1, delay: 1 },
                }}
                className="absolute top-0 flex w-screen rounded-lg bg-black sm:top-10 sm:w-[600px]"
              >
                <Modal src={videoSrc} />
                <p
                  onClick={setModal}
                  className="absolute top-0 right-2 md:cursor-pointer"
                >
                  x
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              className="mb-10 text-5xl font-bold sm:mb-5 sm:hidden sm:text-6xl"
            >
              {movie.title.length > 10
                ? movie.title.slice(0, 10) + "..."
                : movie.title}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              className="hidden mb-10 text-5xl font-bold sm:mb-5 sm:block sm:text-6xl"
            >
              {movie.title}
            </motion.h2>
            <motion.p
              className="text-[17px] sm:text-base"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 1 },
              }}
            >
              {movie.overview.length > 200
                ? movie.overview.slice(0, 200) + "..."
                : movie.overview}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 1 },
              }}
              className="flex gap-5 mt-12 sm:mt-5"
            >
              <Button path={`/movie/${movie.id}`} content="Watch Now" />
              <OutlineButton content="Watch Trailer" func={setModal} />
            </motion.div>
          </div>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, transition: { duration: 1 } }}
            className="hidden w-[300px] rounded-xl sm:block"
            src={apiConfig.originalImage(movie.poster_path)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
