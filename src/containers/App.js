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
  if(hashName === "blog") return
  let parentRect = document.body.getBoundingClientRect();
  let element = document.getElementById(hashName);
  let rect = element.getBoundingClientRect();
  let offset = rect.top - parentRect.top - 20;
  window.scrollTo(0, offset);
};

class App extends Component {
  constructor() {
    super();
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
  scrollToFromMenu = async (hashName) => {
    let toggler = document.getElementById("hamburgerRef");
    toggler.click();
    if(hashName !== "blog") {
      await Promise.resolve(()=>this.props.history.push(`/`))
    }
    scrollTo(hashName);
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
              <MdxContainer />
            </Route>
            <Route path="/">
              <Banner scrollTo={this.scrollTo} />
              <div className="cardListParent">
                <CardList
                  scrollTo={this.scrollTo}
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
