import React from "react";

import FigmaIcon from "../assets/FigmaIcon.png";

const Figma = () => {
  return (
    <div className="bg-elevationTwo w-1/2 max-lg:w-full rounded-primary overflow-hidden">
      <div className="flex justify-between max-lg:items-center max-lg:gap-4 py-[40px] px-[54px]">
        <div className="flex flex-col justify-between">
          <h1 className="text-hfour">45k+ Downloads in Figma</h1>
          <h2 className="text-secondary text-body">
            Freebie design systems & libraries for design community 🗂
          </h2>
        </div>
        <img src={FigmaIcon} size={24} className="max-lg:hidden w-fit text-secondary" />
      </div>
      <div className="mt-4 flex h-[500px] justify-between bgFigma"></div>
    </div>
  );
};

export default Figma;
