import React from "react";
import { Link } from "react-router-dom";
import brandList from "../../../data/bikieBrandName";
import "../BikePrice/bikePrice";

function Brand() {
  return (
    <div
      className="bikePrice-header border w-75 d-inline-block"
      style={{ marginLeft: "17rem" }}
    >
      <div>
        <div className="home-header border-bottom">
          <h3>Search New Bikes Price By Brand</h3>
        </div>
      </div>
      <div className="row m-2 ">
        {brandList.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="col m-3 border border-secondary-subtle"
          >
            <img src={item.img_url} alt={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brand;
