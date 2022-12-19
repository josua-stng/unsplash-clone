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
      <div className="block border-4 p-28 bg-[url('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_39974350_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0')] bg-cover text-white mb-7">
        <div className=" min-w-max rig">
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
