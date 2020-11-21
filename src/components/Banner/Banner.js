import React from "react";
import ButtonInCard from "../Button-in-card/Button-in-card";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="imageContainerParent" id="banner">
      <div className="imageContainer">
        <h2 className="aboveNameText">Meet Me</h2>
        <h1 className="nameText">Yatrik Patel</h1>
        <img
          alt="profile"
          src="https://res.cloudinary.com/dun1b4fpw/image/upload/c_limit,f_auto,h_140,q_auto,w_140/v1574951668/portfolioapp/profile.jpg"
          className="profilePhoto"
        />
        <h3 className="belowNameText">
          Math teacher passionate about becoming a developer
        </h3>
        <h3 className="aboveFunctionText">
          I guess the best way to express that is with the following:
        </h3>
        <img
          alt="teacher to developer function"
          src="https://res.cloudinary.com/dun1b4fpw/image/upload/c_limit,f_auto,q_auto,w_600/v1574951668/portfolioapp/teacherToDev.png"
          className="teacherToDevImage"
        />
        <ButtonInCard nextCardName="aboutme" />
      </div>
    </div>
  );
};

export default Banner;
