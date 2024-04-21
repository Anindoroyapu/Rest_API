import React from "react";
import { Link } from "react-router-dom";

function SignupModal() {
  return (
    <div className="">
      <div className="signup-form">
        <div className="form-container">
          <div className="form-title">Signup</div>
          <div className="form-content">
            <div className="form-input">
              <input type="text" name="fName" placeholder="First name" />
              <input type="text" name="lName" placeholder="Last name" />
              <input type="email" name="rEmail" placeholder="Email" />
              <input type="text" name="rPhone" placeholder="Phone" />
              <input type="password" name="rPassword" placeholder="password" />
            </div>
            <center>
              <div class="form-button">
                <Link>Submit</Link>
              </div>
            </center>
            <div class="form-body">
              By clicking the Sing Up button, you agree to our{" "}
              <Link>Terms and Condition</Link>
              <Link>and policy Privacy.</Link>
            </div>
            <div class="form-subcontent">
              Already have an account?
              <Link>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
