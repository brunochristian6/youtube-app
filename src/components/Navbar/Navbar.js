import React from "react";
import Search from "../Search/Search";
const Navbar = ({ onSubmit }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger navbar-fixed-top">
      <div className="container">
        <div className="col-md-2">
          <div className="navbar-brand text-align-center" href="#">
            YoutubeAPP
          </div>
        </div>
        <div className="col-md-8 mt-2">
          <Search onSubmit={onSubmit} />
        </div>
        <div className="col-md-2 ml-0">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
