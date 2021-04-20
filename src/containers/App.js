import React, { Component, createRef } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import CardList from "../components/CardList/CardList";
import MdxContainer from "./MdxContainer";
import Footer from "../components/Footer/Footer";
import arrow from "../assets/arrow2.png";
import ReactGA from "react-ga";
import "./App.css";

ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search);

// the following function accepts hashname or id
// and scrolls to that id's location on the page
export const scrollTo = (hashName) => {
  let parentRect = document.body.getBoundingClientRect();
  let element = document.getElementById(hashName);
  let rect = element.getBoundingClientRect();
  let offset = rect.top - parentRect.top - 20;
  window.scrollTo(0, offset);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "home",
      hamburgerClicked: false,
      currentRole: "teacher",
      animState: 0,
    };
    this.rootDivRef = createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // this function moves the scrollToTop Button a little higher
  // when the user scrolls to the very bottom of the page
  // so it doesn't overlap the footer.
  checkIfScrollIsAtBottom = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 60
    ) {
      document.getElementById("floatingBtn").style.bottom = "66px";
    } else {
      document.getElementById("floatingBtn").style.bottom = "30px";
    }
  };

  // show the move to top scroll button when the user scroll down.
  handleScroll = (event) => {
    if (document.documentElement.scrollTop > 20) {
      document.getElementById("floatingBtn").style.display = "flex";
      this.checkIfScrollIsAtBottom();
    } else {
      document.getElementById("floatingBtn").style.display = "none";
    }
  };

  // this function scrolls back to the top of the page.
  // it first checks if the hamburger icon overlay is displayed.
  // if the overlay icon is displayed, close the overlay, then
  // scroll to top.  Otherwise, simply scroll to top.
  scrollToTop = () => {
    let overlay = document.getElementById("overlay-content");
    let overlayHeight = overlay.clientHeight;
    let toggler = document.getElementById("hamburgerRef");
    if (overlayHeight !== 0) {
      toggler.click();
    }
    window.scrollTo(0, 0);
  };

  // use this function to scroll to specified hashname from
  // hamburger icon/overlay menu.
  scrollToFromMenu = (hashName) => {
    let toggler = document.getElementById("hamburgerRef");
    toggler.click();
    let regexStr = /blog/g
    if(regexStr.test(window.location.href)) {
      this.props.history.push(`/`)
      setTimeout(()=> scrollTo(hashName), 500)
      return
    }
    scrollTo(hashName);
  };

  // function to update the role
  updateRole = (role) => {
    this.setState({ currentRole: role });
    switch (role) {
      case "teacher":
        this.setState({ animState: 1 });
        break;
      case "developer":
        this.setState({ animState: 2 });
        break;
      default:
        this.setState({ animState: 0 });
        break;
    }
  };

  render() {
    return (
      <div className="App" ref={this.rootDivRef} onScroll={this.scroll}>
        <Navigation
          scrollToFromMenu={this.scrollToFromMenu}
          scrollToTop={this.scrollToTop}
          toggleFunc={this.toggleFunc}
        />
        <div className="AppDiv">
          <Switch>
            <Route path="/blog">
              <MdxContainer 
                scrollToFromMenu={this.scrollToFromMenu}
                scrollToTop={this.scrollToTop} 
              />
            </Route>
            <Route path="/">
              <Banner scrollTo={this.scrollTo} animState={this.state.animState} />
              <div className="cardListParent">
                <CardList
                  scrollTo={this.scrollTo}
                  currentRole={this.state.currentRole}
                />
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
        <div id="floatingBtn" onClick={this.scrollToTop}>
          <img id="arrow" src={arrow} alt="move to top" />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
