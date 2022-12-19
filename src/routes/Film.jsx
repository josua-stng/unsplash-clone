import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles.css";

const Film = () => {
  const [film, setFilm] = useState([]);

  const getPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=film&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await response.json();
    setFilm(data.results);
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
      <div className="block border-4 mb-7 p-28 bg-[url('https://media.istockphoto.com/id/1194433445/video/overlay-effect-on-frame-imitation-of-old-movie-with-fibers-and-grain-on-grey-background.jpg?s=640x640&k=20&c=mcNGDZsk4IaiGPPAC6l9bVggueOk24Q90Poa00q8WHg=')] bg-cover text-gray-700 ">
        <div className="relative left-10 ">
          <h1 className="text-3xl font-semibold mb-5">Film</h1>
          <p>
            Let's honor the beginnings of photography by celebrating analog from
            the
          </p>
          <p className="mb-5">
            this category examines the best of what film photography has to
            offer.
          </p>
          <button className="bg-white text-black p-1 pl-2 pr-2  text-sm rounded">
            Submit to Fillm
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {film.map((films) => (
            <div key={films.id} className="">
              <img src={`${films.urls.regular}`} alt="" />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Film;
