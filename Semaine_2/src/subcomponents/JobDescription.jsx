import React from "react";

const JobDescription = ({date, title}) => {
  return (
    <li className="flex items-start gap-4 text-hfour">
      <div className="flex gap-2 items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
        <span className="text-secondary w-full whitespace-nowrap">{date}:</span>
      </div>
      {title}
    </li>
  );
};

export default JobDescription;
