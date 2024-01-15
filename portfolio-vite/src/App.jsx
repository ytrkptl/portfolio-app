import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import CardList from "./components/CardList/CardList";
import MdxContainerWrapper from "./MdxContainer.jsx";
import Footer from "./components/Footer/Footer";
import arrow from "./assets/arrow2.png";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";

// the following function accepts hashname or id
// and scrolls to that id's location on the page
export const scrollTo = (hashName) => {
  if (hashName === "blog") return window.scrollTo(0, 0);
  let parentRect = document.body.getBoundingClientRect();
  let element = document.getElementById(hashName);
  let rect = element.getBoundingClientRect();
  let offset = rect.top - parentRect.top - 20;
  window.scrollTo(0, offset);
};

function Layout({ children }) {
  const rootDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this function moves the scrollToTop Button a little higher
  // when the user scrolls to the very bottom of the page
  // so it doesn't overlap the footer.
  const checkIfScrollIsAtBottom = () => {
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
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 20) {
      document.getElementById("floatingBtn").style.display = "flex";
      checkIfScrollIsAtBottom();
    } else {
      document.getElementById("floatingBtn").style.display = "none";
    }
  };

  // this function scrolls back to the top of the page.
  // it first checks if the hamburger icon overlay is displayed.
  // if the overlay icon is displayed, close the overlay, then
  // scroll to top.  Otherwise, simply scroll to top.
  const scrollToTop = () => {
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
  const scrollToFromMenu = async (hashName) => {
    let toggler = document.getElementById("hamburgerRef");
    toggler.click();
    if (hashName !== "blog") {
      await Promise.resolve(() => this.props.history.push(`/`));
    }
    scrollTo(hashName);
  };

  return (
    <div className="App" ref={rootDivRef} onScroll={scroll}>
      <Navigation
        scrollToFromMenu={scrollToFromMenu}
        scrollToTop={scrollToTop}
      />
      <div className="AppDiv">
        {children}
        <Footer />
      </div>
      <div id="floatingBtn" onClick={scrollToTop}>
        <img id="arrow" src={arrow} alt="move to top" />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Banner />
      <div className="cardListParent">
        <CardList scrollTo={scrollTo} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes path="/">
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="blog/*"
        element={
          <Layout>
            <MdxContainerWrapper />
          </Layout>
        }
      />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
