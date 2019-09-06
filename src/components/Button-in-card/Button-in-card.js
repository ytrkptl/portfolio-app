import React from 'react';
import { scrollTo } from '../../containers/App';

import './Button-in-card.css';

const ButtonInCard = ({nextCardName, bgColor}) => {
	return (
    <button 
      className="btnInsideCard" 
      style={{
        backgroundColor: `${bgColor}`,
      }}
      onClick={()=>scrollTo(`${nextCardName}`)}
    >
      NEXT 
    </button>
	);
}

export default ButtonInCard;