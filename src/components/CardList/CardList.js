import React from "react";
import AboutMe from "../IndividualCards/AboutMe/AboutMe";
import Developer from "../IndividualCards/Developer/Developer";
import Blog from "../IndividualCards/Blog/Blog";
import Teacher from "../IndividualCards/Teacher/Teacher";
import Projects from "../IndividualCards/Projects/Projects";
import Contact from "../IndividualCards/Contact/Contact";
import Credits from "../IndividualCards/Credits/Credits";

import { Data } from "./Data.js";

const CardList = ({ scrollTheRoot }) => {
  let itemsArr = [];
  for (let i = 0; i < Data.length; i++) {
    if (i === 0) {
      itemsArr.push(
        <AboutMe title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    } else if (i === 1) {
      itemsArr.push(
        <Projects
          title={Data[i].name}
          key={i}
          id={Data[i].id}
          cardNum={i}
          scrollTheRoot={scrollTheRoot}
        />
      );
    } else if (i === 2) {
      itemsArr.push(
        <Developer title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    } else if (i === 3) {
      itemsArr.push(
        <Blog title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    } else if (i === 4) {
      itemsArr.push(
        <Teacher title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    } else if (i === 5) {
      itemsArr.push(
        <Contact title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    } else {
      itemsArr.push(
        <Credits title={Data[i].name} key={i} id={Data[i].id} cardNum={i} />
      );
    }
  }
  return itemsArr;
};

export default CardList;
