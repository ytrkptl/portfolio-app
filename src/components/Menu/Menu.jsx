import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import './Hamburger.css';
import { Data } from '../CardList/Data';

const Menu = ({ handleClick }) => {
  const hamburgerRef = React.createRef();
  const menuRef = React.createRef();

  const toggleFunc = () => {
    hamburgerRef.current.classList.toggle('change');
    if (hamburgerRef.current.className === 'hamburgerContainer') {
      closeNav();
    } else {
      openNav();
    }
  };
  const openNav = () => {
    menuRef.current.style.height = '100%';
  };
  const closeNav = () => {
    menuRef.current.style.height = '0%';
  };

  return (
    <div id="menu">
      <div
        ref={menuRef}
        id="myNav"
        className="overlay">
        <div
          className="overlay-content"
          id="overlay-content">
          {Data.map((el) => (
            <Fragment key={el.name}>
              {el.isExternal ? (
                <a
                  key={el.id}
                  id={`${el.id}Btn`}
                  className="col3Btns grow"
                  href={el.url}
                  target="_blank"
                  rel="noreferrer">
                  {el.name}
                </a>
              ) : (
                <Link
                  key={el.id}
                  id={`${el.id}Btn2`}
                  className="col3MenuLinks grow"
                  to={`/${el.url}`}
                  onClick={(e) => handleClick('scrollToFromMenu', el.id, e)}>
                  {el.name}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <span
        onClick={toggleFunc}
        id="hamburgerRef">
        <div
          ref={hamburgerRef}
          className="hamburgerContainer">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </span>
    </div>
  );
};

export default Menu;
