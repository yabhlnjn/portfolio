"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = (props: any) => {
  return (
    <motion.div
      initial={{ scale: 1, backgroundColor: "#59A19E" }}
      whileHover={{ scale: 1.05, backgroundColor: "#338c89" }}
      whileTap={{ scale: 0.95, backgroundColor: "#338c89" }}
      transition={{ duration: 0.2 }}
      className="w-fit cursor-pointer select-none rounded-md bg-primary px-10 py-4 text-white ease-in-out"
    >
      {props.children}
    </motion.div>
  );
};

export default Button;
