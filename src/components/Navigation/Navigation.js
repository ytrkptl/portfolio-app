import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { Data } from '../CardList/Data';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ scrollToTop, scrollToFromMenu }) => {
  const handleClick = (fnName, id = null) => {
    fnName === 'scrollToTop' ? scrollToTop() : scrollToFromMenu(id);
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
          onClick={() => handleClick('scrollToTop', null)}
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
            onClick={() => handleClick('scrollToFromMenu', el.id)}
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
