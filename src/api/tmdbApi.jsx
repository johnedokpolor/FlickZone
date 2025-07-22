import fetchFromApi from "./fetchFromApi";

const category = {
  movie: "movie",
  tv: "tv",
};

const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top-rated",
};
const tvType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top-rated",
  on_the_air: "on_the_air",
};

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a65d7f6fbe851d422a26fd9d996e4c9b",
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original${imagePath}`,
  w500Image: (imagePath) => `https://api.themoviedb.org/t/p/w500${imagePath}`,
};

const tmdbApi = {
  getMovies: async () => {
    const response = await fetchFromApi(
      `${category.movie}/${movieType.popular}`,
    );
    return response;
    // fetchFromApi(`${category.movie}/${movieType.popular}`)
    //   .then((data) => data)
    //   .catch((err) => console.log(err));
  },
};
export { tmdbApi, apiConfig };
