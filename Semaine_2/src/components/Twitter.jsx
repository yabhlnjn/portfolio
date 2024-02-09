import React from "react";

import { TbSend } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import ProfilePicture from "../assets/profilepic.png";

const Twitter = () => {
  return (
    <div className="bg-elevationTwo py-[40px] px-[35px] rounded-primary flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={ProfilePicture} alt="" />
          <div>
            <p>Name</p>
            <p className="text-secondary">@name</p>
          </div>
        </div>
        <FaTwitter size={32} className="text-[#1DA1F2] self-start" />
      </div>
      <p>
        I never imagined I would do this, but I recently published my first case
        study on Dribbble. 😎{" "}
      </p>
      <button className="flex text-body items-center justify-evenly border border-[#B3B3B3] rounded-full py-2 px-3">
        Read my social
        <TbSend size={18} className="text-secondary" />
      </button>
    </div>
  );
};

export default Twitter;
