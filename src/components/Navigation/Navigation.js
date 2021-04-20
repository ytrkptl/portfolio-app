import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { Data } from "../CardList/Data";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: this.props.hamburgerClicked,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.hamburgerClicked !== this.props.hamburgerClicked) {
      this.setState({ hamburgerClicked: this.props.hamburgerClicked });
    }
  }

  handleClick(fnName, id = null) {
    fnName === "scrollToTop"
      ? this.props.scrollToTop()
      : this.props.scrollToFromMenu(id);
  }

  render() {
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
            onClick={() => this.handleClick("scrollToTop", null)}
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
              onClick={() => this.handleClick("scrollToFromMenu", el.id)}
            >
              {el.name}
            </Link>
          ))}
          <Menu scrollToFromMenu={this.props.scrollToFromMenu} />
        </div>
      </nav>
    );
  }
}
export default Navigation
