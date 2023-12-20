import React from 'react';
import BlogSubtitle from '../BlogSubtitle/BlogSubtitle';
import BlogTitle from '../BlogTitle/BlogTitle';
import './BlogHeader.css';

const BlogHeader = ({ title, subtitle }) => {
  return (
    <div className="blog-header">
      <BlogTitle title={title} />
      <BlogSubtitle subtitle={subtitle} />
    </div>
  );
};

export default BlogHeader;
