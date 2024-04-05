/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import navbarPhoto from "../../assets/desktop version.jpeg";

function Navbar() {
  return (
    <nav>
      <div className="navbar-header">
        <img src={navbarPhoto} />
      </div>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col ">
              1 of 3<div className="col-8">2 of 3 (wider)</div>
            </div>
            <div className="col-8">2 of 3 (wider)</div>
            <div className="col">3 of 3</div>
          </div>
          <div className="row">
            <div className="col">1 of 3</div>
            <div className="col-5">2 of 3 (wider)</div>
            <div className="col">3 of 3</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
