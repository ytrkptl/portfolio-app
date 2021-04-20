import React from "react"
/* eslint-disable import/no-webpack-loader-syntax */
import UglySweater from '!babel-loader!@mdx-js/loader!../mdx-pages/ugly-sweater/ugly-sweater.mdx'
import "./MdxContainer.css"
import { Switch, Route, Link, useHistory } from "react-router-dom"
import BlogList from "../components/BlogList/BlogList";
import { scrollTo } from "./App";

const BackLink = () => <span className="back-link">&#10141;</span>

const MdxContainer = () => {

  let history = useHistory()
  const handleGoingBack = (e) => {
    e.preventDefault();
    setTimeout(()=> {
      scrollTo("blog-info")
    }, 800)
    history.push("/blog-info")
  }

  return (
    <div className="mdx-parent">
      <div className="mdx-card-wrapper">
        <Switch>
          <Route exact path="/blog">
            <div className="back-link-container">
              <Link to="/blog-info" onClick={(e)=>handleGoingBack(e)}><BackLink />Back</Link>
            </div>
            <BlogList />
          </Route>
          <Route exact path="/blog/1">
            <div className="back-link-container">
              <Link to="/blog"><BackLink />Back</Link>
            </div>
            <UglySweater />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MdxContainer