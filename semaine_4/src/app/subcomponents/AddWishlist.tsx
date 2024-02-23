"use client";
import React, { useState } from "react";
import Heart from "@/app/icons/Heart";

const AddWishlist = () => {
  const [fill, setFill] = useState(false);
  return (
    <div
      className="group flex w-fit cursor-pointer select-none items-center gap-4 text-primary"
      onClick={() => setFill(!fill)}
    >
      <Heart fill={fill ? "#3AA39F" : "transparent"} stroke="#3AA39F" />
      <p className={``}>
        Add to Wishlist
      </p>
    </div>
  );
};

export default AddWishlist;
