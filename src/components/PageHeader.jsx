import React from "react";
import footerBg from "../assets/footer-bg.png";

const PageHeader = (props) => {
  const BgStyle = {
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="relative h-36 pt-16" style={BgStyle}>
      <div className="absolute top-0 h-full w-full bg-black/50" />
      <h2 className="relative z-10 text-center text-xl">{props.children}</h2>
    </div>
  );
};

export default PageHeader;
