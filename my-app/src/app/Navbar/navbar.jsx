import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbar() {
  return (
    <nav className=" ">
      <div className="navbar-header">Photo</div>
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
                <a className="list-group-item" href="/Home">
                  Home
                </a>
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
            <div className="col-8">Body</div>
            <div className="col">Body2</div>
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
