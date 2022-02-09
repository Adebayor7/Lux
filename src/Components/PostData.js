import React from 'react';
import img from '../images/Digital.png';
import img1 from '../images/stockvault.png';
import img2 from '../images/marketing-concept.png';

function Do() {
  return (
      <div>
        <section className='header-container'>
            <div className='header-start'>
                <img src= {img} alt='' />
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus bibendum leo, 
                    malesuada tincidunt neque eleifend bibendum. Proin porttitor ante at pharetra sodales. 
                    Aliquam in nisl id lorem laoreet lobortis. 
                </h4>
            </div>
            <div className='header-start'>
                <img src= {img1} alt='' />
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus bibendum leo, 
                    malesuada tincidunt neque eleifend bibendum. Proin porttitor ante at pharetra sodales. 
                    Aliquam in nisl id lorem laoreet lobortis. 
                </h4>
            </div>
            <div className='header-start'>
                <img src= {img2} className='move' alt='' />
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus bibendum leo, 
                    malesuada tincidunt neque eleifend bibendum. Proin porttitor ante at pharetra sodales. 
                    Aliquam in nisl id lorem laoreet lobortis.
                    </h4>
            </div>
        </section>
      </div>
  )
};

export default Do;
