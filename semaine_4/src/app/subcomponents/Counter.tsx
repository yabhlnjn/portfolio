"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Counter = () => {
  const [items, setItems] = useState<number>(0);

  const handleIncrease = () => {
    setItems(items + 1);
  };

  const handleDecrease = () => {
    items > 0 ? setItems(items - 1) : setItems(0);
  };

  return (
    <div className="flex w-fit items-center gap-6 rounded-md border border-cool-grey font-semibold">
      <motion.button 
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.90}}
      transition={{ duration: 0.2 }}
      onClick={() => handleDecrease()} className="p-4">
        <Image src="/minus.svg" alt="Plus" width={20} height={20} />
      </motion.button>
      <p className="w-2 text-center">{items}</p>
      <motion.button 
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.90}}
      transition={{ duration: 0.2 }}
      onClick={() => handleIncrease()} className="p-4">
        <Image src="/plus.svg" alt="Plus" width={20} height={20} />
      </motion.button>
    </div>
  );
};

export default Counter;
