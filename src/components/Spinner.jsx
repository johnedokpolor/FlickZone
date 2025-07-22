import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
  let [color, setColor] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "auto auto",
    // borderColor: "red",
  };

  return (
    <div className="flex h-full items-center justify-center">
      <BeatLoader
        color={"white"}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
};
export default Spinner;
