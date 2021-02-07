import React from "react";
import CustomCard3 from "../../Card-wrapper/CustomCard3";
import ButtonInCard from "../../Button-in-card/Button-in-card";
import "./Blog.css";

const Blog = ({ title, id, cardNum }) => {
  return (
    <CustomCard3 id={id} cardNum={cardNum} title={title}>
      <p className="blogPara1">
        For now, you can read my blogs on either{" "}
        <a
          href="https://yatrik.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hashnode
        </a>{" "}
        or{" "}
        <a
          href="https://dev.to/ytrkptl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>
      </p>
      <p className="blogPara1">Will be adding more to this card soon</p>
      <ButtonInCard nextCardName="teacher" bgColor="pink" />
    </CustomCard3>
  );
};

export default Blog;
