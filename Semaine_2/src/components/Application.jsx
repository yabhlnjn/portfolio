import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import AppName from "../assets/AppName.png";

const Application = () => {
  return (
    <div className="relative w-full bg-elevationTwo bgLine bg-opacity-0 overflow-hidden rounded-primary py-[40px] px-[54px] max-lg:px-[20px]">
      <div className="flex justify-between">
        <h1 className="text-hfour">Application Name</h1>
        <FiArrowUpRight size={24} className="w-fit text-secondary" />
      </div>
      <h2 className="text-secondary text-body">Subtitle</h2>
      <img src={AppName} alt="" className="mx-auto scale-150 max-lg:scale-100" />
    </div>
  );
};

export default Application;
