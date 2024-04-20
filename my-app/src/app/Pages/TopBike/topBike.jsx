import React from "react";
import { Link } from "react-router-dom";
import topBikeList from "../../../data/topBikeList";

function topBike() {
  return (
    <div
      className="bikePrice-header border w-75 d-inline-block"
      style={{ marginLeft: "17rem" }}
    >
      <div>
        <div className="home-header border-bottom">
          <h3>Best Bikes In Bangladesh</h3>
        </div>
      </div>
      <div className="row m-2 ">
        {topBikeList.map((item) => (
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

export default topBike;
