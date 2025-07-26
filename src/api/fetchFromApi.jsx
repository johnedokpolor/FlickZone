import axios from "axios";

const fetchFromApi = async (url, page) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const options = {
    method: "GET",
    params: {
      language: "en-US",
      page: page ? 1 + page : 1,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjVkN2Y2ZmJlODUxZDQyMmEyNmZkOWQ5OTZlNGM5YiIsIm5iZiI6MTczODg2Njk3NS4wNTEsInN1YiI6IjY3YTUwMTFmZjE5NmE3M2FlNzY2ZjQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ystrQaes6F3xPof6eCxNJR8t1-CYlKW5a2Gay4s9Srg",
    },
  };

  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

export default fetchFromApi;
