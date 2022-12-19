import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles.css";


const Office = () => {
  const [office, setOffice] = useState([]);

  const getPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await response.json();
    setOffice(data.results);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div>
      <div className="block border-4 mb-7 p-28 bg-[url('https://wallpaperaccess.com/full/8061909.jpg')] bg-cover text-white ">
        <div className="relative left-10">
          <h1 className="text-3xl font-semibold mb-5">Office</h1>
          <p>
            Reflecting the realities of the modern workplace in their many forms
            —
          </p>
          <p className="mb-5">
            from images of remote working and start-ups to shots of engineers
          </p>
          <button className="bg-white text-black p-1 pl-2 pr-2  text-sm rounded">
            Submit to Office
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {office.map((offices) => (
            <div key={offices.id} className="">
              <img src={`${offices.urls.regular}`} alt="" />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Office;
