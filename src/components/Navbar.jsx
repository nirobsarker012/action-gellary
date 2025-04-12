import React from "react";
import { FaRegBell } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/src/assets/Banner-min.jpg)] bg-center bg-cover relative">
      <nav className="container z-10 bg-gray-600/50 backdrop-blur-[10px] border border-gray-600 mx-auto lg:w-4/5 px-5 lg:px-10 rounded-4xl sticky top-2 py-3">
        <div className="flex justify-between items-center">
          <div className="lg:hidden">
            <RiMenu2Line
              size={22}
              className="text-white opacity-75 hover:opacity-100 cursor-pointer"
            />
          </div>
          <div>
            <h2 className="font-light bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[20px] lg:text-[26px]">
              Aunction<span className="font-bold">Gallery</span>
            </h2>
          </div>
          {/* Ul Sections */}
          <ul className="hidden lg:inline-flex items-center space-x-6 text-white opacity-80">
            <li>
              <a
                className="font-poppins transition-all hover:border-b border-white opacity-80 hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-poppins transition-all hover:border-b border-white opacity-80 hover:opacity-100"
                href="#"
              >
                Actions
              </a>
            </li>
            <li>
              <a
                className="font-poppins transition-all hover:border-b border-white opacity-80 hover:opacity-100"
                href="#"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                className="font-poppins transition-all hover:border-b border-white opacity-80 hover:opacity-100"
                href="#"
              >
                How to works
              </a>
            </li>
          </ul>
          {/* Notification Sections */}
          <div className="flex items-center gap-[6px]">
            <div className="relative">
              {" "}
              <FaRegBell
                size={24}
                className="text-white opacity-80 hover:opacity-100"
              />
              <div className="absolute transform translate-x-3 -translate-y-10">
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-[14px] text-[#ddd] px-2 rounded-xl">
                  0
                </span>
              </div>
            </div>
            <img src={"../assets/images.png"} alt="" />
          </div>
        </div>
      </nav>
      {/* Hero Sections */}
      <section className="container font-sora py-60">
        <div className="text-center md:text-left">
          <h1 className="font-extrabold block bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl tracking-tight pb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Bid on Unique Items <br /> from Around the World
          </h1>
          <p className="text-white opacity-70 max-w-[480px] mt-[16px]">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="bg-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-3xl py-3 px-5 font-bold mt-4 cursor-pointer">
            Explore Auctions ✨
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
