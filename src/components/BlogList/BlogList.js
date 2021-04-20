import React from 'react'
import { Link } from 'react-router-dom';
import "./BlogList.css";

const BlogList = () => {
  return (
    <>
      <h2 className="blog-list-h2">Blog</h2>
      <div className="blog-list">
        <article className="blog-list-item">
          <Link className="blog-list-item" to="/blog/1">
            <h3>Article Title</h3>
            <h4>Article Subtitle</h4>
            <p>Adipisicing sunt duis ex sunt sit esse esse. Tempor enim laboris aute ex magna. Do culpa nostrud ipsum culpa esse id id dolor cillum cillum esse laborum dolore amet. Ullamco cupidatat cupidatat excepteur velit commodo dolore commodo veli</p>
            <span>Read &#10141;</span>
          </Link>
        </article>
        <article className="blog-list-item">
          <Link className="blog-list-item" to="/blog/1">
            <h3>Article Title</h3>
            <h4>Article Subtitle</h4>
            <p>Adipisicing sunt duis ex sunt sit esse esse. Tempor enim laboris aute ex magna. Do culpa nostrud ipsum culpa esse id id dolor cillum cillum esse laborum dolore amet. Ullamco cupidatat cupidatat excepteur velit commodo dolore commodo veli</p>
            <span>Read &#10141;</span>
          </Link>
        </article>
        <article className="blog-list-item">
          <Link className="blog-list-item" to="/blog/1">
            <h3>Article Title</h3>
            <h4>Article Subtitle</h4>
            <p>Adipisicing sunt duis ex sunt sit esse esse. Tempor enim laboris aute ex magna. Do culpa nostrud ipsum culpa esse id id dolor cillum cillum esse laborum dolore amet. Ullamco cupidatat cupidatat excepteur velit commodo dolore commodo veli</p>
            <span>Read &#10141;</span>
          </Link>
        </article>
      </div>
    </>
   
  )
}

export default BlogList
