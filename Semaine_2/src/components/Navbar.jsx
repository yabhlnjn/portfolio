import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../assets/LayersLogo.png";
import NavButton from "../subcomponents/NavButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-lg:justify-center mt-4">
      <div className="">
        <img src={Logo} alt="" className="h-[38px]" />
      </div>
      <ul className="max-lg:hidden flex w-fit p-2 border border-elevation rounded-full">
        <NavButton selected={true} text="Home" />
        <NavButton text="About" />
        <NavButton text="Projects" />
        <NavButton text="Contact" />
      </ul>
      <div className="max-lg:hidden flex space-x-6">
        <FaFacebook size={24} className="text-secondary" />
        <FaInstagram size={24} className="text-secondary" />
        <FaDribbble size={24} className="text-secondary" />
      </div>
    </nav>
  );
};

export default Navbar;
