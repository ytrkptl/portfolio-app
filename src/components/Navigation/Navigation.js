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

  render() {
    return (
      <div id="headerMainDiv">
        <div id="col1">
          <Logo />
        </div>
        <div id="col2">
          <button
            id="titleBtn"
            className="grow"
            onClick={() => this.props.scrollToTop()}
          >
            Yatrik's Portfolio
          </button>
        </div>
        <div id="col3">
          {Data.map((el) => (
            <button
              key={el.id}
              id={`${el.id}Btn`}
              className="col3Btns grow"
              onClick={() => this.props.scrollToFromMenu(el.id)}
            >
              {el.name}
            </button>
          ))}
          <Menu scrollToFromMenu={this.props.scrollToFromMenu} />
        </div>
      </div>
    );
  }
}
export default Navigation;
