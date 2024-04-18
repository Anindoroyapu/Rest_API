import React, { useState } from "react";
import { Link } from "react-router-dom";
import alinks from "../../../data/helmetList";

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
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <button
                type="button"
                className=" btn browse-col "
                onClick={() => toggleCollapse(ATYPES.HELMET)}
              >
                HELMET
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className=" btn browse-col"
                onClick={() => toggleCollapse(ATYPES.ENGINEOIL)}
              >
                ENGINEOIL
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className=" btn browse-col "
                onClick={() => toggleCollapse(ATYPES.TYRE)}
              >
                TYRE
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className=" btn browse-col"
                onClick={() => toggleCollapse(ATYPES.BATTERY)}
              >
                BATTERY
              </button>
            </div>
            <div class="col">
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
            {alinks.map((item) => (
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
