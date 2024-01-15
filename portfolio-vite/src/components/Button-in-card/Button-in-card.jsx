import React from "react";
import { Link } from "react-router-dom";
import { scrollTo } from "../../App";

import "./Button-in-card.css";

const ButtonInCard = ({ nextCardIdAndUrl, bgColor }) => {
  return (
    <Link
      to={`/${nextCardIdAndUrl}`}
      onClick={() => scrollTo(`${nextCardIdAndUrl}`)}
    >
      <button
        className="btnInsideCard"
        style={{
          backgroundColor: `${bgColor}`,
        }}
      >
        NEXT
      </button>
    </Link>
  );
};

export default ButtonInCard;
