/* eslint-disable react/prop-types */
import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Base(props) {
  document.title = props.title;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        {/* External Stylesheets */}
        {/* Materialize CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        {props.links}
      </head>
      <Topbar setSidebarVisible={setSidebarVisible} />
      <Sidebar open={sidebarVisible} setVisible={setSidebarVisible} />
      {props.content}

      <Footer />
      {/* External Scripts */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" />
      {/* Materialize JavaScript */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
    </>
  );
}
export default Base;
