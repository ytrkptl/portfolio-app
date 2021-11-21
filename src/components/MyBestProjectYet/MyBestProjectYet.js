import React from "react";
import ButtonInCard from "../Button-in-card/Button-in-card";
import "./MyBestProjectYet.css";

const MyBestProjectYet = () => {
  return (
    <section
      className="myBestProjectImageContainerWrapper"
      id="myBestProjectYet"
    >
      <div className="myBestProjectImageContainer">
        <span className="myBestProjectSpan">Check out </span>
        <a
          href="https://weallxl.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="myBestProjectLink"
        >
          <div className="myBestProjectDivWithH2s">
            <h2 className="myBestProjectDivH2">We</h2>
            <h2 className="myBestProjectDivH2">All</h2>
            <h2 className="myBestProjectDivH2">X</h2>
            <h2 className="myBestProjectDivH2">L</h2>
          </div>
        </a>
        <h2 className="belowWeAllXLText">
          An IXL alternative that I am building
        </h2>
        <p className="my-best-project-slider-text">
          Supports both Light and Dark Themes. Be sure to play with both themes
          on our site at{" "}
          <a
            href="https://weallxl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="myBestProject2ndLink"
          >
            https://weallxl.com/
          </a>
        </p>
        <a
          href="https://weallxl.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="myBestProjectImgLink"
        >
          <img
            src="https://res.cloudinary.com/dun1b4fpw/image/upload/v1574951670/portfolioapp/weallxl-1.png"
            alt="WeAllXL Home Page Light Mode"
          />
        </a>

        <ButtonInCard nextCardIdAndUrl="banner" />
      </div>
    </section>
  );
};

export default MyBestProjectYet;
