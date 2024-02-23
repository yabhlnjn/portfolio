"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShoppingCart from "@/app/icons/ShoppingCart";
import Search from "@/app/icons/Search";
import Menu from "@/app/icons/Menu";

const Navbar = () => {
  const [cartIsHovered, setCartIsHovered] = React.useState(false);
  const [searchIsHovered, setSearchIsHovered] = React.useState(false);
  const [menuIsHovered, setMenuIsHovered] = React.useState(false);

  return (
    <nav className="flex items-center justify-between pl-10 border-b select-none">
      <Image
        src="/logoCozy.svg"
        alt="Logo Cozy"
        width={71}
        height={39}
        className="cursor-pointer"
      />
      <ul className="flex gap-10">
        <motion.li
          initial={{ color: "#17183B" }}
          whileHover={{ color: "#3AA39F" }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          SHOP
        </motion.li>
        <motion.li
          initial={{ color: "#17183B" }}
          whileHover={{ color: "#3AA39F" }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          COLLECTIVE
        </motion.li>
        <motion.li
          initial={{ color: "#17183B" }}
          whileHover={{ color: "#3AA39F" }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          DESIGNERS
        </motion.li>
        <motion.li
          initial={{ color: "#17183B" }}
          whileHover={{ color: "#3AA39F" }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          ABOUT US
        </motion.li>
        <motion.li
          initial={{ color: "#17183B" }}
          whileHover={{ color: "#3AA39F" }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          CONTACT
        </motion.li>
      </ul>
      <div className="flex items-center">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer py-7 pr-5"
          onMouseEnter={() => setMenuIsHovered(true)}
          onMouseLeave={() => setMenuIsHovered(false)}
        >
          <Menu isHovered={menuIsHovered} setIsHovered={setMenuIsHovered} />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer py-7 px-5 mr-5"
          onMouseEnter={() => setSearchIsHovered(true)}
          onMouseLeave={() => setSearchIsHovered(false)}
        >
          <Search
            isHovered={searchIsHovered}
            setIsHovered={setSearchIsHovered}
          />
        </motion.div>

        <div className="w-full mx-auto before:content-[''] before:absolute top-0 before:h-20  before:w-0.1 before:border-l before:border-french-grey">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full mx-auto py-7 px-10 cursor-pointer"
            onMouseEnter={() => setCartIsHovered(true)}
            onMouseLeave={() => setCartIsHovered(false)}
          >
            <ShoppingCart
              isHovered={cartIsHovered}
              setIsHovered={setCartIsHovered}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
