import React from 'react'

import Bros1 from "../assets/Bros/Bros-1.png";
import Bros2 from "../assets/Bros/Bros-2.png";
import Bros3 from "../assets/Bros/Bros-3.png";
import Bros4 from "../assets/Bros/Bros.png";

import { FiArrowUpRight } from "react-icons/fi";

const OrangeSoft = () => {
  return (
    <div className="bg-elevationTwo rounded-primary py-[40px] px-[54px]">
              <div className="flex justify-between">
                <h1 className="text-hfour">
                  Adventure with Orangesoft lasting 5 years
                </h1>
                <FiArrowUpRight size={24} className="w-fit text-secondary" />
              </div>
              <h2 className="text-secondary text-body">
                21 projects realised 🎉
              </h2>
              <div className="mt-4 flex justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-4">
                <div className="flex flex-col gap-1 items-center">
                  <img src={Bros4} alt="" className="w-[100px]" />
                  <p className="text-body font-extralight">Mr. Hashtag</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <img src={Bros1} alt="" className="w-[100px]" />
                  <p className="text-body font-extralight">Energy Saver</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <img src={Bros2} alt="" className="w-[100px]" />
                  <p className="text-body font-extralight">Online School</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <img src={Bros3} alt="" className="w-[100px]" />
                  <p className="text-body font-extralight">Covid Pass</p>
                </div>
              </div>
            </div>
  )
}

export default OrangeSoft