import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import MovieGrid from "../components/MovieGrid";

const Catalog = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <PageHeader>{category === "movie" ? "Movies" : "TV Series"}</PageHeader>
      <div className="my-10">
        <MovieGrid category={category} type="popular" />
      </div>
    </div>
  );
};

export default Catalog;
