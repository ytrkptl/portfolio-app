import { BlogListData } from "./BlogListData.js";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  return (
    <>
      <h2 className="blog-list-h2">Blog</h2>
      <div className="blog-list">
        {
          // don't use index as key
          BlogListData.map((el) => (
            <article className="blog-list-item-article" key={`${el.title}`}>
              <Link className="blog-list-item" to={`/blog/${el.url}`}>
                <h3>{el.title}</h3>
                <h4>{el.subtitle}</h4>
                <p>{el.excerpt}</p>
                <span>Read &#10141;</span>
              </Link>
            </article>
          ))
        }
      </div>
    </>
  );
};

export default BlogList;
