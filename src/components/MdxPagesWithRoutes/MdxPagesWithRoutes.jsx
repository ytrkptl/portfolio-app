import { Routes, Route } from "react-router-dom";
import AvatarLetters from "../../mdx-pages/avatar-letters/index.mdx";
import UglySweater from "../../mdx-pages/ugly-sweater/ugly-sweater.mdx";
import ZoomChat from "../../mdx-pages/zoom-chat-participation-counter/index.mdx";
// import { MDXProvider } from "@mdx-js/react";
import "./MdxPagesWithRoutes.css";

const MdxPagesWithRoutes = () => {
  return (
    <div className="blog-mdx-content">
      <Routes>
        <Route path="/avatar-letters" element={<AvatarLetters />} />
        <Route
          exact
          path="/svg-ugly-christmas-sweaters"
          element={<UglySweater />}
        />
        <Route
          exact
          path="/zoom-chat-participation-counter"
          element={<ZoomChat />}
        />
      </Routes>
    </div>
  );
};

export default MdxPagesWithRoutes;
