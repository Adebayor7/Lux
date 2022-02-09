import React from "react";
import lux from "../images/lux store.png";

function Navbar() {
  return (
    <div className="nav-box">
      <nav>
        <img src={lux} className="logo" alt="" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gadget <i class="fas fa-caret-down"></i></a>
            <ul>
                <li>
                    <a href="#">Apple</a>
                </li>
                <li>
                    <a href="#">Hp</a>
                </li>
                <li>
                    <a href="#">Lenovo</a>
                </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
          <li>
              <a href="#">Register <i class="fas fa-caret-down"></i></a>
          <ul>
            <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
          </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
