import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/brands/LogoWrapper-1.png";
import logo2 from "../assets/brands/LogoWrapper-2.png";
import logo3 from "../assets/brands/LogoWrapper-3.png";
import logo4 from "../assets/brands/LogoWrapper-4.png";
import logo5 from "../assets/brands/LogoWrapper-5.png";
import logo6 from "../assets/brands/LogoWrapper-6.png";
import logo7 from "../assets/brands/LogoWrapper.png";

const Trusted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale:0.9}}
      whileInView={{ opacity: 1, scale:1}}
      transition={{
        ease:"easeInOut",
        duration:0.6
      }}
      className="my-[60px] flex flex-col gap-10 items-center justify-center"
    >
      <p>
        Trusted by teams at over <span className="font-semibold">1,000</span> of
        the world’s leading organizations
      </p>
      <div className="flex gap-12 items-center">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>
    </motion.div>
  );
};

export default Trusted;
