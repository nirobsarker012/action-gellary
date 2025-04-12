import React, { memo, useEffect, useState } from "react";
import Item from "./Item";
import { CiHeart } from "react-icons/ci";
import Cards_Box from "./Cards_Box";

const Cards = memo(() => {
  const [items, setItems] = useState([]);
  const [collectItems, setCollectItems] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetch(`blog.json`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleCollectItems = (item) => {
    setCollectItems([...collectItems, item]);
  };

  const handleAmount = (currentBidPrice) => {
    setAmount(currentBidPrice + amount);
  };

  const removeHandleID = (id) => {
    const remainingItems = collectItems.filter((cart) => cart.id !== id);
    setCollectItems(remainingItems);
  };
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
      <div className="container flex flex-col space-y-4 lg:flex-row items-center lg:items-start lg: space-x-14 py-6">
        <div className="lg:w-3/5 overflow-x-auto">
          <table className=" bg-gray-900 text-white rounded-lg shadow-md">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="p-4">Items</th>
                <th className="p-4">Current Bid</th>
                <th className="p-4">Time Left</th>
                <th className="p-4 text-center">Bid Now</th>
              </tr>
            </thead>
            {items.map((item) => (
              <Item
                key={Math.random()}
                handleCollectItems={handleCollectItems}
                handleAmount={handleAmount}
                item={item}
              />
            ))}
          </table>
        </div>
        {/* Right Section */}
        <div className="bg-gray-800 text-[#ddd] py-2 rounded-xl">
          <div className="text-center border-b border-gray-500 px-6">
            <h2 className="inline-flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-amber-500 to-red-500 text-4xl">
              <CiHeart size={40} className="text-red-500" />
              Favourite Items
            </h2>
          </div>
          {collectItems.length === 0 ? (
            <div className="text-center px-3 py-8">
              <h2 className="text-2xl">No favourite yet</h2>
              <p className="text-[14px] mt-1 text-white opacity-70">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : null}

          {collectItems.map((collectItem) => (
            <Cards_Box
              key={Math.random()}
              collectItem={collectItem}
              removeHandleID={removeHandleID}
              handleAmount={handleAmount}
            />
          ))}
          <div className="w-full flex justify-between items-center border-t border-gray-500 px-2 ">
            <h2 className="text-white text-[24px]">Total bids Amount:</h2>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-[24px]">
              {amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cards;
