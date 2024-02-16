import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo_vaultflow.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
        type: "spring",
        damping: 20,
      }}
      className="fixed z-50 left-1/2 -translate-x-1/2 flex justify-between items-center py-3 px-8 text-primary bg-primary w-[98%] mt-4 rounded-[25px] backdrop-blur-md"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        src={logo}
        alt=""
        className="h-fit"
      />
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="flex gap-12 text-primary"
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
          className="cursor-pointer"
        >
          Features
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
          className="cursor-pointer"
        >
          Pricing
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
          className="cursor-pointer"
        >
          About us
        </motion.li>
      </motion.ul>
      <Button fill={true}>Download the app</Button>
    </motion.nav>
  );
};

export default Navbar;
