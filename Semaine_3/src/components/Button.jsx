import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
    whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full py-2 px-5 ${
        props.fill ? "bg-white text-dark" : "border border-white"
      }`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
