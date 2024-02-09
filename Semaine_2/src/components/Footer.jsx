import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../assets/LayersLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex text-secondary items-center justify-between max-lg:flex-col max-lg:gap-4 mb-10 mt-[120px]">
        <div className="max-lg:hidden">
          <img src={Logo} alt="" className="h-[38px]" />
        </div>
        <div>
          <p>Ezis - Challenge Web</p>
        </div>
        <div className="flex gap-6">
          <FaFacebook size={24} className="text-secondary" />
          <FaInstagram size={24} className="text-secondary" />
          <FaDribbble size={24} className="text-secondary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
