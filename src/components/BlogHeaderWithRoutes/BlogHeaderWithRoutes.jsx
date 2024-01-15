import { Routes, Route } from "react-router-dom";
import BlogHeader from "../BlogHeader/BlogHeader.jsx";
import { BlogListData } from "../BlogList/BlogListData.js";

const BlogHeaderWithRoutes = () => {
  return (
    <Routes>
      {BlogListData.map((el) => (
        <Route
          exact
          path={`/${el.url}`}
          key={`${el.url}`}
          element={<BlogHeader title={el.title} subtitle={el.subtitle} />}
        />
      ))}
    </Routes>
  );
};

export default BlogHeaderWithRoutes;
