import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 bg-opacity-90 text-white">
      <h1 className="text-xl font-bold ml-3 ">Fitness Tracker</h1>
      <nav>
        <ul className="flex space-x-4 mr-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="/graph">Track Progress</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
