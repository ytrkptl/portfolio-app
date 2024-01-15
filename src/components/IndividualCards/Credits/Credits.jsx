import React from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';

import './Credits.css';

let credits = [
  'ZeroToMastery Academy',
  'Udemy',
  'Udacity',
  'W3Schools',
  'Pixabay.com',
  'Link/chain icon from Iconfinder.com',
  'http://techsini.com/multi-mockup/index.php',
  'https://tinypng.com/',
  'https://www.iloveimg.com/crop-image',
  'https://mockuphone.com/#ios',
  'Math Processor Logo from http://www.clker.com/clipart-math-processor.html',
];

const Credits = ({ title, id, cardNum }) => {
  return (
    <CustomCard3 id={id} cardNum={cardNum} title={title}>
      <h3 className="creditsSubtitle">
        Some resources and/or tools I used to create this App:
      </h3>
      <div className="creditsPillParent">
        {credits.map((el, index) => {
          return index < credits.length - 2 ? (
            <span key={index} className="creditsPill">
              {el}
            </span>
          ) : (
            <div key={index} className="creditsPill2">
              <span className="creditsPill">{el}</span>
            </div>
          );
        })}
      </div>
    </CustomCard3>
  );
};

export default Credits;
