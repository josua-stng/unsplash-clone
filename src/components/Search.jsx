import React from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex items-center p-2 text-sm font-light text-gray-500 cursor-pointer ">
      <img
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
        alt="image_log"
        className="w-10 "
      />
      <input
        type="text"
        placeholder="Search free high-resolution photos"
        className="w-full border-4 rounded-2xl text-sm p-1 font-medium max-w-[1450px]"
      />
      <div className="flex">
        <button onClick={handleToogleOpen} className="md:hidden">
        {isOpen?(
            <XMarkIcon className="w-6 h-6"/>
        ):(
            <Bars4Icon className="w-6 h-6"/>
        )}  
        </button>
        <ul className={` ${isOpen ? "flex fixed left-0 right-0 bottom-0 top-14 bg-white flex-col w-full leading-7" : "hidden md:flex"}`}>
          <li className="mr-4 ml-4 font-medium hover:text-gray-900">
            Advertise
          </li>
          <li className="mr-4 ml-4 font-medium hover:text-gray-900">Blog</li>
          <li className="mr-4 ml-4 font-medium hover:text-gray-900">
            Unsplash
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
