import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import Macbook from "../assets/macbook.png";

const Desktop = () => {
  return (
    <div className="relative min-h-[300px] w-full bg-elevationTwo bgSky overflow-hidden rounded-primary py-[40px] px-[54px]">
      <div className="flex justify-between">
        <h1 className="text-hfour">Application Name</h1>
        <FiArrowUpRight size={24} className="w-fit text-secondary" />
      </div>
      <h2 className="text-secondary text-body">Subtitle</h2>
      <img src={Macbook} alt="" className="absolute  top-[30%] left-[20%]" />
    </div>
  );
};

export default Desktop;
