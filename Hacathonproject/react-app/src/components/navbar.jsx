

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full bg-white lg:px-36 text-gray-800 shadow-md flex items-center p-2 z-50">
      <div className="flex-1">
        <a className="text-2xl sm:px-10 px-5 font-bold text-gray-800">
          GramUrja
        </a>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <Link className="text-gray-800 mr-4 text-2xl cursor-pointer" to="/">REPORT</Link>
        <Link className="text-gray-800 mr-4 text-2xl cursor-pointer" to="/test">TEST </Link>
        <Link className="text-gray-800 text-2xl cursor-pointer" to="/activities">ACTIVITY</Link>
      </div>


    </nav>
  );
};

export default Navbar;