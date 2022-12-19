import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import '../styles.css'

const Animals = () => {
    const [animal, setAnimal] = useState([]);


  const getPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=animals&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await response.json();
    setAnimal(data.results);
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
      <div className="block border-4 mb-7 p-28  bg-[url('https://images.unsplash.com/photo-1548400714-e4bec3ea6021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80')] bg-cover text-white ">
        <div className="relative left-10">
          <h1 className="text-3xl font-semibold mb-5">Animals</h1>
          <p>Exotic wildlife, pet kittens — and everything in between. Uncover the</p>
          <p className="mb-5">beauty of the animal kingdom through your screen.</p>
          <button className="bg-white text-black p-1 pl-2 pr-2  text-sm rounded">
            Submit to Animal
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Masonry
            breakpointCols={breakPoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
        {animal.map((animals) => (
          <div key={animals.id} className="">
            <img src={`${animals.urls.regular}`} alt="" />
          </div>
        ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Animals