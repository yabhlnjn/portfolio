import React from "react";
import frameDribbble from "../assets/frameDribbble.png";

const DribbleFrame = () => {
  return (
    <div className="bgDribble rounded-primary overflow-hidden">
      <img src={frameDribbble} alt="" className="w-full object-cover" />
    </div>
  );
};

export default DribbleFrame;
