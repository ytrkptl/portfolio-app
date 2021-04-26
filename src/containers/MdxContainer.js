import React from "react"
import BlogList from "../components/BlogList/BlogList";
import MdxPagesWithRoutes from "../components/MdxPagesWithRoutes/MdxPagesWithRoutes"
import BlogHeaderWithRoutes from "../components/BlogHeaderWithRoutes/BlogHeaderWithRoutes";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { scrollTo } from "./App";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./MdxContainer.css"

const BackLink = () => <span className="back-link">&#10141;</span>

const BackLinkSwitchFunction = ({ containerType }) => {

  let history = useHistory()

  const handleGoingBack = (e) => {
    e.preventDefault();
    setTimeout(()=> {
      scrollTo("blog-info")
    }, 800)
    history.push("/blog-info")
  }

  switch (containerType) {
    case 2:
      return <Link to="/blog"><BackLink />Back</Link>
    default:
      return <Link to="/blog-info" onClick={(e)=>handleGoingBack(e)}><BackLink />Back</Link>
  }
}

const BackLinkContainer = ({ containerType }) => <div className="back-link-container"><BackLinkSwitchFunction containerType={containerType}/></div>

const MdxContainer = () => {
  return (
    <div className="mdx-parent">
      <div className="mdx-card-wrapper">
        <Switch>
          <Route exact path="/blog">
            <BackLinkContainer />
            <BlogList  />
          </Route>
          <Route exact path="/blog/*">
            <ScrollToTop />
            <BackLinkContainer containerType={2} />
            <BlogHeaderWithRoutes />
            <MdxPagesWithRoutes />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MdxContainer