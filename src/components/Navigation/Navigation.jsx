/* eslint-disable react/prop-types */
import Logo from "../Logo/Logo.jsx";
import Menu from "../Menu/Menu.jsx";
import { Data } from "../CardList/Data";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ scrollToTop, scrollToFromMenu }) => {
  const navigate = useNavigate();

  const handleClick = async (fnName, id = null, event) => {
    if (fnName === "scrollToTop") {
      scrollToTop();
    } else {
      event.preventDefault();
      if (window.location.pathname.includes("blog")) {
        await Promise.resolve(() => navigate(`/`));
      }
      scrollToFromMenu(id);
    }
  };

  return (
    <nav id="headerMainDiv">
      <div id="col1">
        <Logo />
      </div>
      <div id="col2">
        <Link
          id="titleBtn"
          className="grow"
          to="/"
          onClick={(e) => handleClick("scrollToTop", null, e)}
        >
          Yatrik's Portfolio
        </Link>
      </div>
      <div id="col3">
        {Data.map((el) => (
          <Link
            key={el.id}
            id={`${el.id}Btn`}
            className="col3Btns grow"
            to={`/${el.url}`}
            onClick={(e) => handleClick("scrollToFromMenu", el.id, e)}
          >
            {el.name}
          </Link>
        ))}
        <Menu scrollToFromMenu={scrollToFromMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
