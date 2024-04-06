import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import dPhoto from "../../assets/desktop_version.jpg";
import photo1 from "../../assets/111.jpg";
import photo2 from "../../assets/222.jpg";
import photo3 from "../../assets/333.jpg";
import photo4 from "../../assets/444.jpg";

function Navbar() {
  return (
    <nav className="header">
      <div className="navbar-header">
        <img src={dPhoto} alt="" />
      </div>
      <div>
        <div className="container text-center">
          <div className="searchBar">
            <form class="d-flex p-md-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col ">
              <div className="desktopMenu list-group">
                <div className="dropdown">
                  <a className="list-group-item" href="/Home">
                    Home
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="btn dropdown-item dropdown-toggle"
                        href="# "
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="# ">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="# ">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <a className="list-group-item" href="/Home">
                  Bike Price
                </a>
                <a className="list-group-item" href="/Home">
                  Compare
                </a>
                <a className="list-group-item" href="/Home">
                  Accessories
                </a>
                <a className="list-group-item" href="/Home">
                  Showrooms
                </a>
                <a className="list-group-item" href="/Home">
                  Brands
                </a>
                <a className="list-group-item" href="/Home">
                  Scooter
                </a>
                <a className="list-group-item" href="/Home">
                  Electric
                </a>
                <a className="list-group-item" href="/Home">
                  Upcoming
                </a>
                <a className="list-group-item" href="/Home">
                  Review
                </a>
                <a className="list-group-item" href="/Home">
                  Tips
                </a>
                <a className="list-group-item" href="/Home">
                  Other
                </a>
              </div>
            </div>
            <div className="col-8 border">
              <div>
                <div>
                  <h1>Browse Bikes By</h1>
                </div>
                <button type="button" class="btn">
                  Brand
                </button>
                <button type="button" class="btn">
                  Budget
                </button>
                <button type="button" class="btn">
                  Displacement
                </button>
                <button type="button" class="btn">
                  Body Style
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">1 Box</div>
            <div className="col-5">2 Box</div>
            <div className="col">3 Box</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
