import React from "react";
import Search from "../Search/Search";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <div className=".col-md-2">
          <div class="navbar-brand text-align-center" href="#">
            YoutubeAPP
          </div>
        </div>
        <div className="col-md-8 mt-2">
          <Search />
        </div>
        <div className="col-md-2">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
