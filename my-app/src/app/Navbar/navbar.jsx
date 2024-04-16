import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
//import Marquee from "react-marquee-slider";
import dPhoto from "../../assets/desktop_version.jpg";
import photo1 from "../../assets/111.jpg";
import photo2 from "../../assets/222.jpg";
import photo3 from "../../assets/333.jpg";
import photo4 from "../../assets/444.jpg";
import logo1 from "../../assets/hero.png";
import logo2 from "../../assets/honda.png";
import logo3 from "../../assets/suzuki.png";
import logo4 from "../../assets/tvs.png";
import logo5 from "../../assets/yamaha.png";

function Navbar() {
  const CTYPES = {
    BRAND: "brand",
    BUDGET: "budget",
    DISPLACEMENT: "displacement",
    BODYSTYLE: "bodyStyle",
  };

  const [categoryName, setCategoryName] = useState(CTYPES.BRAND);

  const toggleCollapse = (keyName) => {
    setCategoryName(keyName);
  };

  return (
    <nav className="header">
      <div className="navbar-header">
        <img src={dPhoto} alt="" />
      </div>
      <div>
        <div className="container text-center">
          <div className="searchBar">
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
              <button className="btn btn-primary me-2" type=" ">
                Login
              </button>
              <button className="btn btn-outline-primary me-2" type=" ">
                SignUp
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

                <a className="list-group-item" href="/home">
                  Bike Price
                </a>
                <a className="list-group-item" href="/home">
                  Compare
                </a>
                <a className="list-group-item" href="home">
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
            <div className="col-8 border ">
              <div>
                <div>
                  <h1>Browse Bikes By</h1>
                </div>
                <div className="row border-bottom font-weight-bold">
                  <div className="col border-primary">
                    <button
                      type="button"
                      className="btn browse-col"
                      onClick={() => toggleCollapse(CTYPES.BRAND)}
                    >
                      Brand
                    </button>

                    {categoryName === CTYPES.BRAND && (
                      <div>
                        <div className="container ">
                          <div className="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div className="col ">
                              <a href="# ">
                                <img
                                  src={logo1}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="# ">
                                <img
                                  src={logo2}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="# ">
                                <img
                                  src={logo3}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="# ">
                                <img
                                  src={logo4}
                                  alt=""
                                  style={{ width: "120px", height: "120px" }}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="# ">
                                <img
                                  src={logo5}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col border-primary">
                    <button
                      type="button"
                      className="btn browse-col"
                      onClick={() => toggleCollapse(CTYPES.BUDGET)}
                    >
                      Budget
                    </button>

                    {categoryName === CTYPES.BUDGET && (
                      <div>
                        <div className="container ">
                          <div className="row d-inline-flex gap-4 me-2 p-2">
                            <div className="col btn-col">
                              <a href="# ">Under 60000</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 1Lakh</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 1.5Lakh</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 2Lakh</a>
                            </div>
                          </div>
                          <div className="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div className="col btn-col">
                              <a href="# ">Under 2.5Lakh</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 3Lakh</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 4Lakh</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col border-primary">
                    <button
                      type="button"
                      className="btn browse-col"
                      onClick={() => toggleCollapse(CTYPES.DISPLACEMENT)}
                    >
                      Displacement
                    </button>
                    {categoryName === CTYPES.DISPLACEMENT && (
                      <div>
                        <div className="container ">
                          <div className="row d-inline-flex gap-4 me-2 p-2">
                            <div className="col btn-col">
                              <a href="# ">Under 100cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 150cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 200cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 250cc</a>
                            </div>
                          </div>
                          <div className="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div className="col btn-col">
                              <a href="# ">Under 300cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 350cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Under 400cc</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col border-primary">
                    <button
                      type="button"
                      className="btn browse-col"
                      onClick={() => toggleCollapse(CTYPES.BODYSTYLE)}
                    >
                      Body Style
                    </button>
                    {categoryName === CTYPES.BODYSTYLE && (
                      <div>
                        <div className="container ">
                          <div className="row d-inline-flex gap-4 me-2 p-2">
                            <div className="col btn-col">
                              <a href="# ">Sports Bike</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Scooter</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Cruiser</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Commuter</a>
                            </div>
                          </div>
                          <div className="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div className="col btn-col">
                              <a href="# ">Naked Sports</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Cafe Racer</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Off-Road</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Adventure</a>
                            </div>
                          </div>
                          <div className="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div className="col btn-col">
                              <a href="# ">Moped</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Tourer</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Mini bike</a>
                            </div>
                            <div className="col btn-col">
                              <a href="# ">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className=""></div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <img src={photo1} alt="" />
                {/*    <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                  <img src={photo4} alt="" />    */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
