import React from "react";
import Image from "next/image";
import Button from "../subcomponents/Button";
import Counter from "../subcomponents/Counter";
import AddWishlist from "../subcomponents/AddWishlist";

const LeftPannel = () => {
  return (
    <>
      <div>
        <Image src="back.svg" alt="Back" width={24} height={24} />
        <p className="flex gap-2 text-space-cadet font-semibold mt-6">
          <span className="text-[#A2A3B0]">Chair</span>
          <span className="font-normal">/</span>
          <span>Meryl Lounge Chair</span>
        </p>
      </div>
      <div>
        <p className="text-5xl font-bold">Meryl Lounge Chair</p>
        <div className="flex justify-between items-center mt-[24px]">
          <p className="font-semibold text-[24px]">$149.99</p>
          <div className="flex items-center gap-3">
            <Image src="/Stars.svg" alt="" width={86} height={14} />
            <p>
              4.6 / 5.0 <span className="text-[#A2A3B0]">(556)</span>
            </p>
          </div>
        </div>
        <p className="mt-[48px]">
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also, there’s a tilt and
          height-adjusting mechanism that’s built to outlast years of ups and
          downs.
        </p>
        <Image
          src="color_selection.svg"
          alt=""
          width={132}
          height={28}
          className="cursor-pointer my-8"
        />
        <div className="flex gap-6">
          <Counter />
          <Button>Add To Cart</Button>
        </div>
      </div>
      <div>
        <p className="mt-6 mb-12">
          Free 3-5 day shipping • Tool-free assembly • 30-day trial
        </p>
        <div className="flex items-center justify-between">
          <AddWishlist />
          <div className="flex gap-6">
            <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
            <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
            <Image
              src="/pinterest.svg"
              alt="Pinterest"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPannel;
