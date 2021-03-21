import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { Data } from "../CardList/Data";
import "./Navigation.css";

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

  handleClick(event, fnName, id = null) {
    event.preventDefault();
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
          <a
            id="titleBtn"
            className="grow"
            href="/"
            onClick={(e) => this.handleClick(e, "scrollToTop")}
          >
            Yatrik's Portfolio
          </a>
        </div>
        <div id="col3">
          {Data.map((el) => (
            <a
              key={el.id}
              id={`${el.id}Btn`}
              className="col3Btns grow"
              href="/"
              onClick={(e) => this.handleClick(e, "scrollToFromMenu", el.id)}
            >
              {el.name}
            </a>
          ))}
          <Menu scrollToFromMenu={this.props.scrollToFromMenu} />
        </div>
      </nav>
    );
  }
}
export default Navigation;
