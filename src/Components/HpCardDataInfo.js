import React from "react";
import img from '../images/bg quote.jpg';
import img1 from '../images/hp_predo.png';
import img2 from '../images/vphp.png';
import img3 from '../images/ceo_hp.png';



function HpCardDataInfo() {
    return (
      <section className="review" id="review">
     
  
        <div className="box-container">
          <div className="box">
            <img src={img} alt="" className="quote" />
            <p>
            President of HP Inc.  <br />
            $20 billion global services.

            </p>
            <img src={img1} class="user" alt="" />
            <h3>Tuan Tran</h3>
           
          </div>
          <div className="box">
            <img src={img} alt="" className="quote" />
            <p>
                Mr. Cho owns over 46,201 units of HP stock worth over $161,398. 
            </p>
            <img src={img2} className="user" alt="" />
            <h3>Alex Cho</h3>
            
          </div>
          <div className="box">
            <img src={img} alt="" className="quote" />
            <p>
                CEO of HP Inc. since November 2019.
            </p>
            <img src={img3} class="user" alt="" />
            <h3>Enrique Lores </h3>
            
          </div>
        </div>
      </section>
    );
  }

  export default HpCardDataInfo;