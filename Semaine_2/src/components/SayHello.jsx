import React from "react";
import { TbSend } from "react-icons/tb";

const SayHello = () => {
  return (
    <div className="relative w-full bg-elevationTwo overflow-hidden rounded-primary py-[20px] px-[34px] flex flex-col justify-between gap-6 max-lg:gap-16">
      <h1 className="text-[45px] font-normal">
        Say, <br />
        Hello 👋🏻
      </h1>
      <div className="flex gap-2">
        <div className="bg-elevationOne rounded-full text-body text-secondary grow font-extralight px-4 py-2 flex items-center">
          Click to message
        </div>
        <TbSend
          size={24}
          className="text-primary px-2 py-2 h-full w-fit rounded-full bg-[#4355FB]"
        />
      </div>
    </div>
  );
};

export default SayHello;
