import { useContext, useState } from "react";
import fetchFromApi from "../api/fetchFromApi";
import { useEffect } from "react";
import { Context } from "../context/context";
import MovieCard from "./MovieCard";
import { OutlineButton } from "./Button";
import { useNavigate } from "react-router-dom";

const MovieGrid = ({ category, type }) => {
  const [items, setItems] = useState([]);
  const [page, setpage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { shuffle } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      navigate(`/${category}/search/${keyword}`);

      search();
      return;
    }
    fetchFromApi(`${category}/${type}`).then((data) => {
      shuffle(data.results);
      console.log(data.results);
      setItems(data.results);
    });
  }, [category, keyword]);

  const loadmore = () => {
    if (keyword) {
      fetchFromApi(`search/${category}?query=${keyword}`, page).then((data) => {
        shuffle(data.results);
        console.log(data.results);
        setItems((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      });
      return;
    }

    fetchFromApi(`${category}/${type}`, page).then((data) => {
      shuffle(data.results);
      console.log(data.results);
      setItems((prev) => [...prev, ...data.results]);
      setpage((prev) => prev + 1);
    });
  };
  const search = () => {
    fetchFromApi(`search/${category}?query=${keyword}`).then((data) => {
      shuffle(data.results);
      console.log(data.results);
      setItems(data.results);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-5 text-center bg-gray-900 border border-gray-500 rounded-md">
        <input
          type="text"
          className="items-start px-2 py-1 bg-transparent border-0"
          placeholder="Enter Keyword..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="px-2 py-1 bg-red-800 rounded-md hover:bg-red-500"
          onClick={search}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center px-5 mb-5 sm:px-20">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {items.map((item, i) => (
            <MovieCard item={item} key={i} category={category} />
          ))}
        </div>
      </div>
      <OutlineButton content="Load More" func={loadmore} />
    </div>
  );
};

export default MovieGrid;
