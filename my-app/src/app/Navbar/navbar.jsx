import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import dPhoto from "../../assets/desktop_version.jpg";
import { Link } from "react-router-dom";
import links from "./link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <button
                className="btn btn-outline-primary me-2"
                type="button"
                onClick={handleShow}
              >
                Login
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>

              <button className="btn btn-outline-primary me-2" type=" ">
                SignUp
              </button>
            </form>
          </div>
          <div className="row">
            <div className="desktopMenu">
              <div className=" list-group">
                {links.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="list-group-item"
                  >
                    {item?.title}
                  </Link>
                ))}
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
