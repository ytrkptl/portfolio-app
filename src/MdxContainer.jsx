/* eslint-disable react/prop-types */
import BlogList from "./components/BlogList/BlogList";
import MdxPagesWithRoutes from "./components/MdxPagesWithRoutes/MdxPagesWithRoutes";
import BlogHeaderWithRoutes from "./components/BlogHeaderWithRoutes/BlogHeaderWithRoutes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { MDXProvider } from "@mdx-js/react";
import { Routes, Route, Link } from "react-router-dom";
import "./MdxContainer.css";

const BackLink = () => <span className="back-link">&#10141;</span>;

const BackLinkSwitchFunction = ({ containerType }) => {
  switch (containerType) {
    case 2:
      return (
        <Link to="/blog">
          <BackLink />
          Back
        </Link>
      );
    default:
      return (
        <Link to="/">
          <BackLink />
          Back
        </Link>
      );
  }
};

const BackLinkContainer = ({ containerType }) => (
  <div className="back-link-container">
    <BackLinkSwitchFunction containerType={containerType} />
  </div>
);

const MdxContainer = () => {
  return (
    <div className="mdx-parent">
      <div className="mdx-card-wrapper">
        <ScrollToTop />
        <BackLinkContainer />
        <BlogList />
      </div>
    </div>
  );
};

const MdxOther = () => {
  return (
    <div className="mdx-parent">
      <div className="mdx-card-wrapper">
        <ScrollToTop />
        <BackLinkContainer containerType={2} />
        <BlogHeaderWithRoutes />
        <MDXProvider>
          <MdxPagesWithRoutes />
        </MDXProvider>
      </div>
    </div>
  );
};

const MdxContainerWrapper = () => {
  return (
    <Routes path="/">
      <Route index element={<MdxContainer />} />
      <Route path="*" element={<MdxOther />} />
    </Routes>
  );
};

export default MdxContainerWrapper;
