import React from "react";
import ButtonInCard from "../Button-in-card/Button-in-card";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="imageContainerParent" id="banner">
      <div className="imageContainer">
        <span className="aboveNameText">Meet Me</span>
        <h1 className="nameText">Yatrik Patel</h1>
        <img
          alt="profile"
          src="https://res.cloudinary.com/dun1b4fpw/image/upload/c_limit,f_auto,h_140,q_auto,w_140/v1574951668/portfolioapp/profile.jpg"
          className="profilePhoto"
        />
        <h2 className="belowNameText">Teacher turned Developer</h2>
        <h3 className="aboveFunctionText">
          I guess the best way to express that is with the following:
        </h3>
        <p className="be-sure-text">A before/after slider that you can play with:</p>
        <div className="before-after-container">
          <iframe
            title="Before-After Slider"
            frameborder="0"
            className="juxtapose"
            width="auto"
            height="400"
            src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=07c97570-ff8e-11eb-abb7-b9a7ff2ee17c"
          ></iframe>
        </div>
        <ButtonInCard nextCardIdAndUrl="about-me" />
      </div>
    </div>
  );
};

export default Banner;
