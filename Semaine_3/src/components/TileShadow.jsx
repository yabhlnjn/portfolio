import React from "react";

const TileShadow = (props) => {
  return (
    <div
      className={`fantasy-shadow rounded-[24px] 
      w-${props.width}
      ${props?.features ? "flex flex-col justify-between p-12 gap-3 " : ""}
      ${props.css}`}
    >
      {props.children}
    </div>
  );
};

export default TileShadow;
