import React, { useState } from "react";
import logo1 from "../../../assets/hero.png";
import logo2 from "../../../assets/honda.png";
import logo3 from "../../../assets/suzuki.png";
import logo4 from "../../../assets/tvs.png";
import logo5 from "../../../assets/yamaha.png";
import "../BikePrice/bikePrice";

function bikePrice() {
  const CTYPES = {
    BRAND: "brand",
    BUDGET: "budget",
    DISPLACEMENT: "displacement",
    BODYSTYLE: "bodyStyle",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryName, setCategoryName] = useState(CTYPES.BRAND);

  const toggleCollapse = (keyName) => {
    setCategoryName(keyName);
  };
  return (
    <div className="bikePrice-header border w-50 d-inline-block ms-5">
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
  );
}

export default bikePrice;
