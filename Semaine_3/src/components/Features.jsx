import React from "react";
import { motion } from "framer-motion";
import TileShadow from "./TileShadow";
import analytics from "../assets/analytics.png";
import code from "../assets/code_collaboration.png";
import digital from "../assets/digital_token.png";
import credit_token from "../assets/credit_token.png";
import Button from "./Button";
import Slide from "./Slide";

const Features = () => {
  return (
    <div className="pt-[35px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
        }}
        className="max-w-[450px] mx-auto text-center flex flex-col gap-8"
      >
        <h2 className="px-4 font-semibold text-[44px]">
          Features that work for your future.
        </h2>
        <p>
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </motion.div>
      <div className="max-w-[80%] mx-auto pt-20 flex flex-col gap-16 max-lg:gap-6">
        <div className="flex gap-6 max-lg:flex-col">
          <Slide fromX={-90}>
            <TileShadow features={true} width={1 / 2}>
              <img src={analytics} alt="" className="w-fit" />
              <h3 className="font-semibold text-3xl">Analytics Dashboard</h3>
              <p>
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
              <a href="#" className="font-semibold underline">
                View dashboard
              </a>
            </TileShadow>
          </Slide>
          <Slide delay={0.3} fromX={90}>
            <TileShadow features={true} width={1 / 2}>
              <img src={credit_token} alt="" className="w-fit" />
              <h3 className="font-semibold text-3xl">Digital Credit Tokens</h3>
              <p className="font-extralight">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>
              <a href="#" className="font-semibold underline">
                View tokens
              </a>
            </TileShadow>
          </Slide>
        </div>
        <Slide fromY={90}>
          <TileShadow features={true} width={"full"}>
            <div className="flex gap-[130px] items-center max-xl:flex-col max-xl:gap-7">
              <div className="flex flex-col justify-between gap-3">
                <img src={code} alt="" className="w-fit" />
                <h3 className="font-semibold text-3xl">
                  Digital Credit Tokens
                </h3>
                <p className="font-extralight">
                  Reward your customers and incentivize engagement with our
                  innovative digital credit tokens. Our tokens can be customized
                  to match your branding, and are a flexible and scalable way to
                  drive customer loyalty and encourage repeat business.
                </p>
                <a href="#" className="font-semibold underline">
                  View tokens
                </a>
              </div>
              <img
                src={digital}
                alt=""
                className="max-lg:hidden fantasy-shadow rounded-[24px]"
              />
            </div>
          </TileShadow>
        </Slide>
        <Slide fromY={90}>
          <TileShadow
            features={true}
            css={"items-center lg:px-[280px] text-center !gap-6"}
          >
            <h3 className="font-bold text-4xl">
              Our powerful analytics provides invaluable insights.
            </h3>
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
            <Button fill={false}>Download the app</Button>
          </TileShadow>
        </Slide>
      </div>
    </div>
  );
};

export default Features;
