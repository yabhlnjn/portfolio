import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/VaultFlow_Hero.png";
import TileShadow from "./TileShadow";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="mx-auto w-[70%] pt-[200px] flex flex-col gap-6 items-center pb-[80px]">
      <motion.p
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
        className="px-4 py-2 border border-white border-opacity-30 rounded-full"
      >
        We just raised $20M in Series B. Learn more
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="textGradient text-[60px] leading-none font-medium text-center"
      >
        Modern analytics <br /> for the modern world
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
        className="w-[60%] text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
        className="flex gap-4 mb-[80px]"
      >
        <Button fill={true}>Download the app</Button>
        <Button fill={false}>Talk to an expert</Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
      >
        <TileShadow>
          <motion.img src={hero} alt="" className="" />
        </TileShadow>
      </motion.div>
    </div>
  );
};

export default Hero;
