import React from 'react';
// import { FaSearch } from 'react-icons/fa';
import './home.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
    <nav>
      <div className="brand">
        <h3>Shri Vishnu Educational Society</h3>
      </div>
      <div className="navigation">
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="search">
          <div className="search-content">
            <button className="search-button">Search</button>
            <input type="text" className="search-input" placeholder="Search here..." />
          </div>
        </div>
      </div>
    </nav>
    <div>
    
    {/* <div className="relative text-center" style={{ marginTop: "15rem" }}> */}
    {/* <h1 id="heading">Learn with Alumini</h1>
      <Link to="/alumini/sign_in"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md inline-block mx-2">Alumni</Link>
      <Link to="/users/sign_in"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md inline-block mx-2">Student</Link>
    </div>
  </div> */}
  <div className="flex flex-col justify-center items-center h-screen mt-0" cd>
    
      <h1 className="text-4xl font-bold mb-8 mt-5">Learn with Alumni</h1>
      <div className="flex">
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
          Alumni
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Student
        </button> */}
        <Link to="/alumini/sign_in"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">Alumni</Link>
      <Link to="/users/sign_in"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Student</Link>

      </div>
    </div>
    
    
</div>
    </div>
  );
}

export default Navbar;
