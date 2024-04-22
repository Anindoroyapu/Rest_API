import React, { useState } from "react";
import { Link } from "react-router-dom";
import helmetList from "../../../data/helmetList";
import enginoilList from "../../../data/enginoilList";
import tyreList from "../../../data/tyreList";
import batteryList from "../../../data/betteryList";
import clothingList from "../../../data/clothingList";

function Accessories() {
  const ATYPES = {
    HELMET: "helmet ",
    ENGINEOIL: "engineoil",
    TYRE: "tyre ",
    BATTERY: "battery ",
    CLOTHING: "clothing",
  };

  const [categoryName, setCategoryName] = useState(ATYPES.HELMET);

  const toggleCollapse = (keyName) => {
    setCategoryName(keyName);
  };

  return (
    <div
      className="bikePrice-header border w-75 d-inline-block"
      style={{ marginLeft: "17rem" }}
    >
      <div className="home-header border-bottom">
        <h3>Available All Motorcycle Accessories</h3>
      </div>
      <div>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <button
                type="button"
                className=" btn browse-col "
                onClick={() => toggleCollapse(ATYPES.HELMET)}
              >
                HELMET
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className=" btn browse-col"
                onClick={() => toggleCollapse(ATYPES.ENGINEOIL)}
              >
                ENGINEOIL
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className=" btn browse-col "
                onClick={() => toggleCollapse(ATYPES.TYRE)}
              >
                TYRE
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className=" btn browse-col"
                onClick={() => toggleCollapse(ATYPES.BATTERY)}
              >
                BATTERY
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className=" btn browse-col"
                onClick={() => toggleCollapse(ATYPES.CLOTHING)}
              >
                CLOTHING
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {categoryName === ATYPES.HELMET && (
          <div className="row m-2">
            {helmetList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="col m-3 border border-secondary-subtle text-decoration-none "
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        {categoryName === ATYPES.ENGINEOIL && (
          <div className="row m-2">
            {enginoilList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="col m-3 border border-secondary-subtle text-decoration-none "
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        {categoryName === ATYPES.TYRE && (
          <div className="row m-2">
            {tyreList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="col m-3 border border-secondary-subtle text-decoration-none "
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        {categoryName === ATYPES.BATTERY && (
          <div className="row m-2">
            {batteryList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="col m-3 border border-secondary-subtle text-decoration-none "
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        {categoryName === ATYPES.CLOTHING && (
          <div className="row m-2">
            {clothingList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="col m-3 border border-secondary-subtle text-decoration-none "
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accessories;
