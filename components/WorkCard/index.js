import React from "react";
import Image from 'next/image'

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}>
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "600px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
      </div>
    </div>
  );
};

export default WorkCard;
