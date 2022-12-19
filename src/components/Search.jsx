import React from "react";

const Navbar = () =>{
    return(
        <div className="flex items-center p-2 text-sm font-light text-gray-500 cursor-pointer ">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" alt="image_log" className="w-10 "/>
            <input type="text" placeholder="Search free high-resolution photos" className="w-full border-4 rounded-2xl text-sm p-1 font-medium max-w-[1450px]" />
            <p className="mr-4 ml-4 hover:text-gray-900 font-medium">Advertise</p>
            <p className="mr-4 hover:text-gray-900 font-medium">Blog</p>
            <p className="mr-4  hover:text-gray-900 font-medium">Unsplash</p>
        </div>
    )
}

export default Navbar