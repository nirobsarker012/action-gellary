import React, { memo } from "react";

const Cards = memo(() => {
  return (
    <div className="bg-[#111827] py-30">
      <div className="flex flex-col  items-start container ">
        <h2 className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-4xl xl:text-5xl font-semibold">
          Active Auctions
        </h2>
        <p className="text-white opacity-65 mt-3">
          Discover and bid on extraordinary items
        </p>
      </div>
      {/* Table Design */}
    </div>
  );
});

export default Cards;
