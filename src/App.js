import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Search";
import Animals from "./routes/Animals";
import Fashion from "./routes/Fashion";
import Film from "./routes/Film";
import Office from "./routes/Office";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mb-5 text-center font-light text-gray-500 cursor-pointer">
        <Link to="/" className="text-sm p-2 hover:text-gray-900 font-medium">
          Editional
        </Link>
        <Link
          to="/fashion"
          className="text-sm p-2 hover:text-gray-900 font-medium"
        >
          Fashion
        </Link>
        <Link
          to="/animal"
          className="text-sm p-2 hover:text-gray-900 font-medium"
        >
          Animal
        </Link>
        <Link
          to="/office"
          className="text-sm p-2 hover:text-gray-900 font-medium"
        >
          Office
        </Link>
        <Link
          to="/film"
          className="text-sm p-2 hover:text-gray-900 font-medium"
        >
          Film
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/fashion" element={<Fashion />} />
        <Route path="/animal" element={<Animals />} />
        <Route path="/office" element={<Office />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </>
  );
};

export default App;
