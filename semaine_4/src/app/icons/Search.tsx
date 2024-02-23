import * as React from "react";

const SvgComponent = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      viewBox="0 0 24 24"
      fill="none"
      height={24}
      {...props}
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={`${props.isHovered ? "#3AA39F" : "#17183B"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="transition-all duration-200"
      />
      <path
        d="M20.9999 21L16.6499 16.65"
        stroke={`${props.isHovered ? "#3AA39F" : "#17183B"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="transition-all duration-200"
      />
    </svg>
  );
};
export default SvgComponent;
