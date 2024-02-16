import React from "react";
import logo from "../assets/logo_vaultflow.png";

const Footer = () => {
  return (
    <div className="font-extralight max-w-[80%] mx-auto mt-[85px] py-[60px] px-6 flex gap-24">
      <div className="flex flex-col gap-10 w-[40%]">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Contact</p>
          <p>
            Work inquires: work@vaultflow.com <br />
            PR and speaking: press@vaultflow.com <br />
            New business: newbusiness@vaultflow.com
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Careers</p>
          <p>Careers@vaultflow.com</p>
        </div>
        <p className="text-off">
          © 2023 Vaultflow. All Rights Reserved. Vaultflow
        </p>
      </div>
      <div className="flex flex-col gap-10 w-[40%]">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Address</p>
          398 11th Street, Floor 2 <br />
          San Francisco, CA 94103
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Social</p>
          Twitter <br />
          Instagram <br />
          Tik Tok
        </div>
      </div>
      <div className="self-end w-[20%]">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
