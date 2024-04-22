import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignupModal() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [rphone, setRphone] = useState();
  const [rEmail, setEmail] = useState();
  const [rpassword, setRpassword] = useState();

  const handleSubmit = () => {
    axios
      .post("https://localhost:7201", {
        firstName: fName,
        lastName: lName,
        phone: rphone,
        email: rEmail,
        password: rpassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="bikePrice-header border w-75 d-inline-block"
      style={{ marginLeft: "17rem" }}
    >
      <div className="">
        <div className="signup-form">
          <div className="form-container">
            <div className="form-title home-header border-bottom">
              <h3>Signup</h3>
            </div>
            <div className="form-content home-header">
              <div className="form-input row m-5 gap-3 fs-5 ">
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className=" sign-header "
                  value={fName}
                  onChange={(fin) => setFName(fin)}
                />
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className=" sign-header"
                  value={lName}
                  onChange={(fin) => setLName(fin)}
                />
                <input
                  type="email"
                  name="rEmail"
                  placeholder="Email"
                  className=" sign-header"
                  value={rphone}
                  onChange={(fin) => setRphone(fin)}
                />
                <input
                  type="text"
                  name="rPhone"
                  placeholder="Phone"
                  className=" sign-header"
                  value={rEmail}
                  onChange={(fin) => setEmail(fin)}
                />
                <input
                  type="password"
                  name="rPassword"
                  placeholder="Password"
                  className=" sign-header"
                  value={rpassword}
                  onChange={(fin) => setRpassword(fin)}
                />
              </div>
              <center>
                <div className="form-button">
                  <Link
                    className="text-decoration-none btn btn-outline-primary me-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Link>
                </div>
              </center>
              <div className="form-body">
                By clicking the Sing Up button, you agree to our
                <Link className="text-decoration-none">
                  Terms and Condition
                </Link>
                <Link className="text-decoration-none">
                  and policy Privacy.
                </Link>
              </div>
              <div className="form-subcontent">
                Already have an account?
                <Link className="text-decoration-none">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
