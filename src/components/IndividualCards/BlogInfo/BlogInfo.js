import React from "react";
import CustomCard3 from "../../Card-wrapper/CustomCard3";
import ButtonInCard from "../../Button-in-card/Button-in-card";
import Confetti from 'canvas-confetti';
import { Link } from "react-router-dom";
import "./BlogInfo.css";

const Blog = ({ title, id, cardNum }) => {

  const showConfetti =  () => {
    Confetti()
    window.scrollTo(0,0)
  }

  return (
    <CustomCard3 id={id} cardNum={cardNum} title={title}>
      <h3 className="blogInfoSubtitle">
        You can read my blogs right here on my site:
        <Link to="/blog" className="blog-cta" onClick={showConfetti}>Click here to read my blogs</Link>
      </h3>
      <p className="blogInfoPara1">Or on the following blogging platforms:</p>
      <div className="blog-card-link-div">
        <a
          href="https://blog.yatrik.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hashnode Powered Blog
        </a>
        <span className="dog">or</span>
        <a
          href="https://dev.to/ytrkptl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>
      </div>
      <ButtonInCard nextCardIdAndUrl="teacher" bgColor="pink" />
    </CustomCard3>
  );
};

export default Blog;
