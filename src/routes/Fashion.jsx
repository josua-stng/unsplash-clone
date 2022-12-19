import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles.css";


const Fashion = () => {
  const [fashion, setFashion] = useState([]);


  const getPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=fashion&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await response.json();
    setFashion(data.results);
  };

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div>
      <div className="block border-4 mb-7 p-28 bg-[url('https://static.vecteezy.com/system/resources/previews/001/984/892/original/banner-design-geometric-hexagon-colorful-overlapping-with-background-free-vector.jpg')] bg-cover text-black ">
        <div className="relative left-10">
          <h1 className="text-3xl font-semibold mb-5">Fashion</h1>
          <p>Fashion is a powerful form of self-expression</p>
          <p className="mb-5">
            his category documents style through inspiring shots of street
            fashion
          </p>
          <button className="bg-white text-black p-1 pl-2 pr-2  text-sm rounded">
            Submit to Fashion
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fashion.map((fashions) => (
            <div key={fashions.id} className="">
              <img src={`${fashions.urls.regular}`} alt="" />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Fashion;
