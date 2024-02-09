import React from "react";

import Orangesoft from "../assets/Apps/Orangesoft.png";
import Aval from "../assets/Apps/Aval.png";
import Lacerta from "../assets/Apps/Lacerta.png";
import Stocks from "../assets/Apps/Stocks.png";
import MerryKitchen from "../assets/Apps/MerryKitchen.png";
import Jullia from "../assets/Apps/Jullia.png";

import { FiArrowUpRight } from "react-icons/fi";

const Adventure = () => {
  return (
    <div className="relative overflow-hidden bg-elevationTwo rounded-primary py-[40px] px-[54px]">
      <div className="flex justify-between">
        <h1 className="text-hfour">My adventure lasting 10+ years</h1>
        <FiArrowUpRight size={24} className="w-fit text-secondary" />
      </div>
      <h2 className="text-secondary text-body">21 projects realised 🎉</h2>
      <div className="mt-4 flex gap-4 bg-[#171717] py-2 px-5 rounded-[30px] border border-[#2C2C2C] -mr-[400px]">
        <img src={Orangesoft} alt="" className="w-[70px] aspect-square" />
        <img src={Aval} alt="" className="w-[70px] aspect-square" />
        <div className="h-[50px] self-center w-0.5 bg-elevationTwo"></div>
        <img src={Lacerta} alt="" className="w-[70px] aspect-square" />
        <img src={Stocks} alt="" className="w-[70px] aspect-square" />
        <div className="h-[50px] self-center w-0.5 bg-elevationTwo"></div>
        <img src={MerryKitchen} alt="" className="w-[70px] aspect-square" />
        <img src={Jullia} alt="" className="w-[70px] aspect-square" />
      </div>
    </div>
  );
};

export default Adventure;
