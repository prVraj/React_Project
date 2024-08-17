// import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Footers from "../Footers/Footers";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footers />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};