import React from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";

const Item = ({ item, handleCollectItems, handleAmount }) => {
  const handleToast = () => {
    toast("✔ Items Selected");
  };
  const { title, currentBidPrice, timeLeft, image } = item;
  return (
    <tbody className="divide-y  divide-gray-800">
      {/* Row Template */}
      <tr className="b hover:bg-gray-800 transition">
        <td className="flex items-center gap-4 p-4">
          <img
            src={image}
            alt="Vintage Leather Backpack"
            className="w-12 h-12 rounded"
          />
          <span>{title}</span>
        </td>
        <td className="p-4">{currentBidPrice}</td>
        <td className="p-4">{timeLeft}</td>
        <td className="p-4 text-center">
          <button
            onClick={() => {
              handleToast();
              handleCollectItems(item);
              handleAmount(currentBidPrice);
            }}
            className="text-red-500 hover:text-red-400"
          >
            <CiHeart />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
