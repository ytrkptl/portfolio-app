import React from 'react';
import { Switch, Route } from 'react-router';
import BlogHeader from '../BlogHeader/BlogHeader.js';
import { BlogListData } from '../BlogList/BlogListData.js';

const BlogHeaderWithRoutes = () => {
  return (
    <Switch>
      {BlogListData.map((el) => (
        <Route exact path={`/blog/${el.url}`} key={`${el.url}`}>
          <BlogHeader title={el.title} subtitle={el.subtitle} />
        </Route>
      ))}
    </Switch>
  );
};

export default BlogHeaderWithRoutes;
