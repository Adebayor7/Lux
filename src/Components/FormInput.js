import React from "react";

function ImageData() {
  return (
    <div>
      <section id="toogle">
        
        <div id="body">
          <div className="wrapper">
            <h2>Login</h2>
            <form action="#">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                ></input>
              </div>
              <div className="input-box button">
                <input type="Submit" value="Login"></input>
              </div>
              <div className="text">
                <h3>
                  Don't have an account ? <a href="#">Sign Up</a>
                </h3>
              </div>
            </form>
          </div>
        </div>

        <div id="body">
          <div className="wrapper">
            <h2>Registration</h2>
            <form action="#">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Create password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                ></input>
              </div>
              <div className="policy">
                <input type="checkbox" name="" value=""></input>
                <h3>I accept all terms & conditions </h3>
              </div>
              <div className="input-box button">
                <input type="Submit" value="Register Now"></input>
              </div>
              <div className="text">
                <h3>
                  Already have an account ? <a href="#">Login Here</a>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageData;
