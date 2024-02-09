import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

import PhoneMockup from "../assets/Phone.png";

const Phone = () => {
  return (
    <div className="relative w-1/2 max-lg:w-full max-lg:min-h-[550px] h-full bg-elevationTwo bgSpace overflow-hidden rounded-primary py-[40px] px-[54px]">
      <div className="flex justify-between">
        <h1 className="text-hfour">Application Name</h1>
        <FiArrowUpRight size={24} className="w-fit text-secondary" />
      </div>
      <h2 className="text-secondary text-body">Subtitle</h2>
      <img
        src={PhoneMockup}
        alt=""
        className="absolute scale-125 max-lg:scale-100 max-lg:top-[20%] max-lg:left-[10%] top-[35%] left-[30%]"
      />
    </div>
  );
};

export default Phone;
