import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
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
  const [collapsed, setCollapsed] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
  });

  const toggleCollapse = (collapseKey) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }));
  };
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
              <button class="btn btn-primary me-2" type="submit">
                Search
              </button>
              <button class="btn btn-primary me-2" type=" ">
                Login
              </button>
              <button class="btn btn-outline-primary me-2" type=" ">
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
            <div className="col-8 border ">
              <div>
                <div>
                  <h1>Browse Bikes By</h1>
                </div>
                <div class="row border-bottom font-weight-bold">
                  <div class="col border-primary">
                    <button
                      type="button"
                      class="btn"
                      onClick={() => toggleCollapse("collapse1")}
                    >
                      {collapsed.collapse1 ? "Brand" : "Brand"}
                    </button>

                    {!collapsed.collapse1 && (
                      <div>
                        <div class="container ">
                          <div class="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div class="col">
                              <a href="# ">
                                <img
                                  src={logo1}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div class="col">
                              <a href="# ">
                                <img
                                  src={logo2}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div class="col">
                              <a href="# ">
                                <img
                                  src={logo3}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </a>
                            </div>
                            <div class="col">
                              <a href="# ">
                                <img
                                  src={logo4}
                                  alt=""
                                  style={{ width: "120px", height: "120px" }}
                                />
                              </a>
                            </div>
                            <div class="col">
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
                  <div class="col border-primary">
                    <button
                      type="button"
                      class="btn"
                      onClick={() => toggleCollapse("collapse2")}
                    >
                      {collapsed.collapse2 ? "Budget" : "Budget"}
                    </button>

                    {!collapsed.collapse2 && (
                      <div>
                        <div class="container ">
                          <div class="row d-inline-flex gap-4 me-2 p-2">
                            <div class="col">
                              <a href="# ">Under 60000</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 1Lakh</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 1.5Lakh</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 2Lakh</a>
                            </div>
                          </div>
                          <div class="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div class="col">
                              <a href="# ">Under 2.5Lakh</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 3Lakh</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 4Lakh</a>
                            </div>
                            <div class="col">
                              <a href="# ">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="col border-primary">
                    <button
                      type="button"
                      class="btn"
                      onClick={() => toggleCollapse("collapse3")}
                    >
                      {collapsed.collapse3 ? "Displacement" : "Displacement"}
                    </button>
                    {!collapsed.collapse3 && (
                      <div>
                        <div class="container ">
                          <div class="row d-inline-flex gap-4 me-2 p-2">
                            <div class="col">
                              <a href="# ">Under 100cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 150cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 200cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 250cc</a>
                            </div>
                          </div>
                          <div class="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div class="col">
                              <a href="# ">Under 300cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 350cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Under 400cc</a>
                            </div>
                            <div class="col">
                              <a href="# ">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="col border-primary">
                    <button
                      type="button"
                      class="btn"
                      onClick={() => toggleCollapse("collapse4")}
                    >
                      {collapsed.collapse4 ? "Body Style" : "Body Style"}
                    </button>
                    {!collapsed.collapse4 && (
                      <div>
                        <div class="container ">
                          <div class="row d-inline-flex gap-4 me-2 p-2">
                            <div class="col">
                              <a href="# ">Sports Bike</a>
                            </div>
                            <div class="col">
                              <a href="# ">Scooter</a>
                            </div>
                            <div class="col">
                              <a href="# ">Cruiser</a>
                            </div>
                            <div class="col">
                              <a href="# ">Commuter</a>
                            </div>
                          </div>
                          <div class="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div class="col">
                              <a href="# ">Naked Sports</a>
                            </div>
                            <div class="col">
                              <a href="# ">Cafe Racer</a>
                            </div>
                            <div class="col">
                              <a href="# ">Off-Road</a>
                            </div>
                            <div class="col">
                              <a href="# ">Adventure</a>
                            </div>
                          </div>
                          <div class="row d-inline-flex gap-4 me-2 p-4 border-bottom">
                            <div class="col">
                              <a href="# ">Moped</a>
                            </div>
                            <div class="col">
                              <a href="# ">Tourer</a>
                            </div>
                            <div class="col">
                              <a href="# ">Mini bike</a>
                            </div>
                            <div class="col">
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
              <div>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
