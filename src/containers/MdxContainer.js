import React from "react"
import BlogList from "../components/BlogList/BlogList";
import MdxPagesWithRoutes from "../components/MdxPagesWithRoutes/MdxPagesWithRoutes"
import BlogHeaderWithRoutes from "../components/BlogHeaderWithRoutes/BlogHeaderWithRoutes";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Switch, Route, Link } from "react-router-dom";
import "./MdxContainer.css"

const BackLink = () => <span className="back-link">&#10141;</span>

const BackLinkSwitchFunction = ({ containerType }) => {

  switch (containerType) {
    case 2:
      return <Link to="/blog"><BackLink />Back</Link>
    default:
      return <Link to="/"><BackLink />Back</Link>
  }
}

const BackLinkContainer = ({ containerType }) => <div className="back-link-container"><BackLinkSwitchFunction containerType={containerType}/></div>

const MdxContainer = () => {
  return (
    <div className="mdx-parent">
      <div className="mdx-card-wrapper">
        <Switch>
          <Route exact path="/blog">
            <ScrollToTop />
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