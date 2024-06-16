import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="max-w-[1200px]">
        <div className=" grid grid-cols-2 gap-10 ">
          <Link
            to="/admin"
            className="flex justify-center items-start h-52 w-52 bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            <h1 className="h-full flex items-center font-bold text-white">
              Admin
            </h1>
          </Link>
          <Link
            to="/fellow"
            className="flex justify-center items-start h-52 w-52 bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            <h1 className="h-full flex items-center  font-bold text-white">
              Fellow
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
