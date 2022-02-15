import React from "react";
import img from "../images/bg quote.jpg";
import img1 from "../images/lenove_ceo.png";
import img2 from "../images/lenovo_sp.png";
import img3 from "../images/lenovo_vp.png";

function LenoDataInfo() {
  return (
    <section className="review" id="review">
      <div className="box-container">
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
            Executive Vice President at
            Lenovo Group Ltd.
          </p>
          <img src={img1} class="user" alt="" />
          <h3> Mr. Liu Jun </h3>
        </div>
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
          Chief Technology Officer & President of Lenovo Group 
          </p>
          <img src={img2} className="user" alt="" />
          <h3>Dr. Yong Rui</h3>
        </div>
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
            Chairman & CEO of Lenovo's board from 2004 to 2008. 
          </p>
          <img src={img3} class="user" alt="" />
          <h3>Y. Yuanqing</h3>
        </div>
      </div>
    </section>
  );
}

export default LenoDataInfo;
