import React from "react";
import img from "../images/bg quote.jpg";
import img1 from "../images/apple_founder.png";
import img2 from "../images/apple_co-founder.png";
import img3 from "../images/apple_cofounder.png";


function AppleDataInfo() {
  return (
    <section className="review" id="review">
   

      <div className="box-container">
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
            Chief executive officer (CEO), &
            co-founder of Apple Inc.
          </p>
          <img src={img1} class="user" alt="" />
          <h3>Steve Jobs </h3>
         
        </div>
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
            Co-founded Apple Computer Company now Apple Inc. 
          </p>
          <img src={img2} className="user" alt="" />
          <h3>Ron Wayne</h3>
          
        </div>
        <div className="box">
          <img src={img} alt="" className="quote" />
          <p>
            Computer programmer & <br />co-founder Apple Inc.
          </p>
          <img src={img3} class="user" alt="" />
          <h3>Stephen Gary </h3>
          
        </div>
      </div>
    </section>
  );
}

export default AppleDataInfo;
