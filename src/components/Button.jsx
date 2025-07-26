import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, content }) => {
  return (
    <Link
      to={path}
      className="w-fit rounded-2xl bg-red-800 px-5 py-2 shadow-md hover:shadow-red-400 md:cursor-pointer"
    >
      {content}
    </Link>
  );
};
const OutlineButton = ({ func, content, path }) => {
  return (
    <Link
      to={path}
      onClick={func}
      className="w-fit rounded-2xl border border-white px-5 py-2 shadow-md hover:shadow-red-400 md:cursor-pointer"
    >
      {content}
    </Link>
  );
};

export { Button, OutlineButton };
