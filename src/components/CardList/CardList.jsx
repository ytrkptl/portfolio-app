import { useSelector } from "react-redux";
import AboutMe from "../IndividualCards/AboutMe/AboutMe";
import Developer from "../IndividualCards/Developer/Developer";
import Teacher from "../IndividualCards/Teacher/Teacher";
import Projects from "../IndividualCards/Projects/Projects";
import Contact from "../IndividualCards/Contact/Contact";
import Credits from "../IndividualCards/Credits/Credits";

const CardList = ({ scrollTheRoot }) => {
  const cards = useSelector((state) => state.cards.cards);
  let itemsArr = [];
  for (let i = 0; i < cards.length; i++) {
    if (i === 0) {
      itemsArr.push(
        <AboutMe title={cards[i].name} key={i} id={cards[i].id} cardNum={i} />
      );
    } else if (i === 1) {
      itemsArr.push(
        <Projects
          title={cards[i].name}
          key={i}
          id={cards[i].id}
          cardNum={i}
          scrollTheRoot={scrollTheRoot}
        />
      );
    } else if (i === 2) {
      itemsArr.push(
        <Developer title={cards[i].name} key={i} id={cards[i].id} cardNum={i} />
      );
    } else if (i === 3) {
      continue;
    } else if (i === 4) {
      itemsArr.push(
        <Teacher title={cards[i].name} key={i} id={cards[i].id} cardNum={i} />
      );
    } else if (i === 5) {
      itemsArr.push(
        <Contact title={cards[i].name} key={i} id={cards[i].id} cardNum={i} />
      );
    } else {
      itemsArr.push(
        <Credits title={cards[i].name} key={i} id={cards[i].id} cardNum={i} />
      );
    }
  }
  return itemsArr;
};

export default CardList;
