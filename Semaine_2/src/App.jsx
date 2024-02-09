import React from "react";
import Navbar from "./components/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import { TbSend } from "react-icons/tb";

import Journaling from "./components/Journaling";
import OrangeSoft from "./components/OrangeSoft";
import Figma from "./components/Figma";
import Adventure from "./components/Adventure";
import Phone from "./components/Phone";
import Twitter from "./components/Twitter";
import Desktop from "./components/Desktop";
import Application from "./components/Application";
import SayHello from "./components/SayHello";
import Footer from "./components/Footer";
import DribbleFrame from "./components/DribbleFrame";

function App() {
  return (
    <main className="px-20 max-lg:px-4 max-w-[1600px] mx-auto flex flex-col">
      <Navbar />
      <section className="text-white mt-12 flex flex-col gap-4">
        <div className="flex gap-4 max-lg:flex-col">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
            <Journaling />
            <OrangeSoft />
          </div>
          <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
            <Adventure />
            <div className="flex max-lg:flex-col gap-4">
              <Phone />
              <div className="flex w-1/2 max-lg:w-full flex-col gap-1 max-lg:gap-4">
                <Twitter />
                <DribbleFrame />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-4">
          <Figma />
          <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
            <Desktop />
            <div className="flex gap-4 max-lg:flex-col">
              <Application />
              <SayHello />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
