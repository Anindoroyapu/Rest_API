import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getApiUrl } from "../../../utils/url";

function SignupModal() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [phone, setRphone] = useState();
  const [email, setEmail] = useState();
  const [password, setRpassword] = useState();

  const handleSubmit = () => {
    axios
      .post(`${getApiUrl()}/api/auth/create-account`, {
        FirstName: fName,
        LastName: lName,
        PrimaryPhone: phone,
        PrimaryEmail: email,
        Password: password,
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
            <div className="row">
              <div className="col"></div>
              <div className="col-6 border">
                <div className="form-content home-header">
                  <div className="form-input row m-5 gap-3 fs-5 ">
                    <input
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      className=" sign-header border-bottom"
                      value={fName}
                      onChange={(ev) => setFName(ev.target.value)}
                    />
                    <input
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      className=" sign-header border-bottom"
                      value={lName}
                      onChange={(ev) => setLName(ev.target.value)}
                    />
                    <input
                      type="email"
                      name="rEmail"
                      placeholder="Email"
                      className=" sign-header border-bottom"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                      type="text"
                      name="rPhone"
                      placeholder="Phone"
                      className=" sign-header border-bottom"
                      value={phone}
                      onChange={(ev) => setRphone(ev.target.value)}
                    />
                    <input
                      type="password"
                      name="rPassword"
                      placeholder="Password"
                      className=" sign-header border-bottom"
                      value={password}
                      onChange={(ev) => setRpassword(ev.target.value)}
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
                  <div className="form-body pt-3">
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
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
