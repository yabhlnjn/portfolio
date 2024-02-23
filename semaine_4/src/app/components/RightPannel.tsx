"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const RightPannel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 pour droite, -1 pour gauche

  const images = [
    "/chair_img/chair_1.png",
    "/chair_img/chair_2.png",
    "/chair_img/chair_3.png",
    "/chair_img/chair_4.png",
    "/chair_img/chair_5.png",
  ];

  const handleNext = () => {
    setDirection(1);
    setImgIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setImgIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? -50 : 50,
        opacity: 0.5,
      };
    },
    center: {
      zIndex: 1,
      x: 0.5,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction > 0 ? 50 : -50,
        opacity: 0.5,
      };
    },
  };
  return (
    <>
      <div className="flex flex-col items-center gap-6 self-end">
        <p className="text-xl font-semibold text-[#A2A3B0]">
          <span className="text-3xl text-space-cadet">
            {"0" + (imgIndex + 1)}
          </span>{" "}
          / 05
        </p>
        <div className="flex gap-20">
          <Image
            src="/chevron-left.svg"
            alt="Image précédente"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => handlePrevious()}
          />
          <Image
            src="/chevron-right.svg"
            alt="Image suivante"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => handleNext()}
          />
        </div>
      </div>
      <AnimatePresence custom={direction}>
        <div className="relative items-center">
          <div className="absolute left-1/2 top-8 -z-10 h-[60%] w-full bg-gradient-to-r from-transparent to-[#4B8785]"></div>
          <motion.div
            key={imgIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2 },
              opacity: { duration: 0.3 },
            }}
            className="relative flex"
          >
            <Image
              src={images[imgIndex]}
              key={imgIndex}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "auto" }}
              className="relative z-30 mx-auto"
            />
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="flex items-center justify-between gap-2">
        {images.map((image: string, index: number) => {
          return (
            <div
              key={index}
              className={`cursor-pointer rounded-md border-2 p-2 ${
                index === imgIndex ? "border-primary" : ""
              }`}
              onClick={() => setImgIndex(index)}
            >
              <Image
                src={image}
                width={88}
                height={88}
                alt={`Photo chaise ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RightPannel;
