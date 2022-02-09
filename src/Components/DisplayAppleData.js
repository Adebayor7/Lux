import React from 'react';
import { AppleData } from './ToggerAppleCard';

function DisplayAppleData() {
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
        {AppleData.map((AppleData) => (
          <div className="card-data-info">
            <div className="togger-card-info">
              <div className="toggle-card">
                <img src={AppleData.imageSrc} className='img-toggle' />
                <h3 className='more-data' >{AppleData.title}</h3>
                <span className='more-data'>{AppleData.price}</span>
                <span className='more-data'>{AppleData.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayAppleData;
