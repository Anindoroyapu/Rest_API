import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
//import Marquee from "react-marquee-slider";
import dPhoto from "../../assets/desktop_version.jpg";
//import photo1 from "../../assets/111.jpg";
//import photo2 from "../../assets/222.jpg";
//import photo3 from "../../assets/333.jpg";
//import photo4 from "../../assets/444.jpg";

function Navbar() {
  // if (keyName === "brand") {
  //   setCategoryName((cuData) => ({ ...cuData, [keyName]: !cuData?.brand }));
  // }
  // if (keyName === "budget") {
  //   setCategoryName((cuData) => ({ ...cuData, [keyName]: !cuData?.budget }));
  // }
  // if (keyName === "displacement") {
  //   setCategoryName((cuData) => ({
  //     ...cuData,
  //     [keyName]: !cuData?.displacement,
  //   }));
  // }
  // if (keyName === "bodyStyle") {
  //   setCategoryName((cuData) => ({
  //     ...cuData,
  //     [keyName]: !cuData?.bodyStyle,
  //   }));
  // }

  return (
    <nav className="header">
      <div className="navbar-header ">
        <img src={dPhoto} alt="" />
      </div>
      <div>
        <div className="container text-center ">
          <div className="searchBar ">
            <form className="d-flex p-md-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary me-2" type="submit">
                Search
              </button>
              <button className="btn btn-outline-primary me-2" type=" ">
                Login
              </button>

              <button className="btn btn-outline-primary me-2" type=" ">
                SignUp
              </button>
            </form>
          </div>
          <div className="row">
            <div className="desktopMenu">
              <div className=" list-group">
                <div className="dropdown">
                  <a className="list-group-item" href="/Home">
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="btn dropdown-item dropdown-toggle"
                        href="# "
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="# ">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="# ">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <a className="list-group-item" href="bikePrice">
                  Bike Price
                </a>
                <a className="list-group-item" href="/home">
                  Compare
                </a>
                <a className="list-group-item" href="/home">
                  Accessories
                </a>
                <a className="list-group-item" href="/home">
                  Showrooms
                </a>
                <a className="list-group-item" href="/home">
                  Brands
                </a>
                <a className="list-group-item" href="/home">
                  Scooter
                </a>
                <a className="list-group-item" href="/home">
                  Electric
                </a>
                <a className="list-group-item" href="/home">
                  Upcoming
                </a>
                <a className="list-group-item" href="/home">
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

            {/*
            <div className="fPhoto">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photo1} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={photo2} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={photo3} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={photo4} className="d-block w-100" alt="" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
  */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
