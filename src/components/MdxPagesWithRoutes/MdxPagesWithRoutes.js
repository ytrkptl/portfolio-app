import React from 'react'
import { Switch, Route } from 'react-router'
/* eslint-disable import/no-webpack-loader-syntax */
import UglySweater from '!babel-loader!@mdx-js/loader!../../mdx-pages/ugly-sweater/ugly-sweater.mdx'
import ZoomChat from '!babel-loader!@mdx-js/loader!../../mdx-pages/zoom-chat-participation-counter/index.mdx'
import "./MdxPagesWithRoutes.css";

const MdxPagesWithRoutes = () => {
  return (
    <div className="blog-mdx-content">
      <Switch>
        <Route exact path="/blog/avatar-letters" component={ZoomChat} />
        <Route exact path="/blog/svg-ugly-christmas-sweaters" component={UglySweater} />
        <Route exact path="/blog/zoom-chat-participation-counter" component={ZoomChat} />
      </Switch>
    </div>
  )
}

export default MdxPagesWithRoutes
