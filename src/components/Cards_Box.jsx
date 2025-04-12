import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cards_Box = ({ collectItem, removeHandleID, handleAmount }) => {
  const handleDelete = () => {
    toast("❗ Removed this Items");
  };
  const { image, title, bidsCount, currentBidPrice } = collectItem;
  return (
    <div className="w-full flex items-start justify-between py-5 px-2">
      <div className="flex space-x-2">
        <img src={image} alt="" width={60} height={14} />
        <div className="flex flex-col gap-2 text-white opacity-80 hover:opacity-100">
          <h3>{title}</h3>
          <div className="flex space-x-4">
            <span>${currentBidPrice}</span>
            <span>Bids:{bidsCount}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handleDelete(), removeHandleID(collectItem.id);
          handleAmount(-currentBidPrice);
        }}
      >
        <MdDelete className="text-red-500" size={22} />
      </button>
    </div>
  );
};

export default Cards_Box;
