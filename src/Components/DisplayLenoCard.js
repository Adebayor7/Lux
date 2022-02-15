import React from "react";
import { LenovoData } from "./ToggerLenoCard";


function DisplayLenoCard() {
    return (
    <div id="card-togger-data">
        <div className="card-header">
          <h3>Making transactions are easier, faster and cheaper now</h3>
          <span className="card-header">
            Leveraging the power of blockchain, you can now make transactions,{" "}
            <br />
            get returns and be unlimited with the transactions.
          </span>
        </div>
        <div className="toggle-grid">
          {LenovoData.map((LenovoData) => (
            <div className="card-data-info">
              <div className="togger-card-info">
                <div className="toggle-card">
                  <img src={LenovoData.imageSrc} className='img-toggle' />
                  <h3 className='more-data' >{LenovoData.title}</h3>
                  <span className='more-data'>{LenovoData.price}</span>
                  {/* <span className='more-data'>{LenovoData.description}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default DisplayLenoCard;