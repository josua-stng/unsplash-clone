import React, { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import '../styles.css'

const Photo = () => {
  const [photo, setPhoto] = useState([]);

  const getPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=50&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await response.json();
    setPhoto(data);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const breakPoints={
    default:3,
    1100:2,
    700:1
  }

  return (
    <div>
      <div className="block border-4 p-28 bg-[url('https://images.unsplash.com/photo-1509737443057-96f30a3480da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80')] bg-cover text-white mb-7">
        <div className=" min-w-max rig text-gray-600">
          <h1 className="text-3xl font-semibold mb-5">Unsplash</h1>
          <p>The internet's source for visual</p>
          <p className="mb-5">Powered by creators everywhere</p>
          <button className="bg-white text-black p-1 pl-2 pr-2  text-sm rounded">
            Submit to Picture
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Masonry
            breakpointCols={breakPoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
        {photo.map((photos) => (
          <div key={photos.id} className="">
            <img src={`${photos.urls.regular}`} alt="" />
          </div>
        ))}
        </Masonry>
      </div>
    </div>
  );
};
export default Photo;
